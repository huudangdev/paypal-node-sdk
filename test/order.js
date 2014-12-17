/* Copyright 2015 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('Order', function () {
        var create_payment_json = {
            "intent": "order",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://return.url",
                "cancel_url": "http://cancel.url"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "10.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "10.00"
                },
                "description": "This is the payment description."
            }]
        };

        //payment id which has been approved by payer with following payer id
        var approved_payment_id = 'PAY-75S55092W03420906KP2LESA';
        var payer_id = 'HCXTE7DLHVTDN';

        var order_id = 'O-1PL20702WE6290838';
        var executed_order_id = 'O-1EW733634T317614V';
        var authorized_order_id = 'O-7A4605469K8426134';
        var captured_order_id = 'O-20L81840AL4365052';
        var voided_order_id = 'O-45139474YJ962820K';

        var authorize_details = {
            "amount": {
                "currency": "USD",
                "total": "0.20"
            }
        };

        var capture_details = {
            "amount": {
                "currency": "USD",
                "total": "0.70"
            },
            "is_final_capture": true
        };

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/order');
        }

        it('create and get payment with intent order', function (done) {
            paypal.payment.create(create_payment_json, function (error, payment) {
                expect(error).equal(null);
                expect(payment.id).to.contain('PAY-');

                paypal.payment.get(payment.id, function (error, payment) {
                    expect(error).equal(null);
                    expect(payment.httpStatusCode).equal(200);
                    expect(payment.state).to.contain('created');
                    expect(payment.intent).to.contain('order');
                    done();
                });
            });
        });

        it('get order success', function (done) {
            paypal.order.get(order_id, function (error, order) {
                expect(error).equal(null);
                expect(order.id).to.equal(order_id);
                expect(order.parent_payment).to.not.be.empty;
                done();
            });
        });

        it('execute fails for invalid payer id', function (done) {
            paypal.payment.create(create_payment_json, function (error, payment) {
                expect(error).equal(null);

                paypal.payment.get(payment.id, function (error, payment) {
                    expect(error).equal(null);

                    paypal.payment.execute(payment.id, { "payer_id" : "dummy" }, function (error, payment) {
                        expect(error.response.name).to.equal('INVALID_PAYER_ID');
                        expect(error.response.httpStatusCode).to.equal(400);
                        done();
                    });
                });
            });
        });

        it('execute fails for unapproved order', function (done) {
            paypal.payment.create(create_payment_json, function (error, payment) {
                expect(error).equal(null);

                paypal.payment.get(payment.id, function (error, payment) {
                    expect(error).equal(null);

                    paypal.payment.execute(payment.id, { "payer_id" : payer_id }, function (error, payment) {
                        expect(error.response.name).to.equal('PAYMENT_NOT_APPROVED_FOR_EXECUTION');
                        expect(error.response.httpStatusCode).to.equal(400);
                        done();
                    });
                });
            });
        });

        it('authorize fails for voided order', function (done) {
            paypal.order.void(order_id, function (error, order) {
                expect(error).equal(null);
                expect(order.state).to.equal('voided');

                paypal.order.authorize(order_id, authorize_details, function (error, authorization) {
                    expect(error.response.name).to.equal('ORDER_ALREADY_COMPLETED');
                    expect(error.response.message).to.contain('Order has already been voided, expired or completed');
                    expect(error.response.debug_id).to.not.be.empty;
                    done();
                });
            });
        });

        it('capture fails for voided order', function (done) {
            paypal.order.capture(voided_order_id, capture_details, function (error, order) {
                expect(error.response.name).to.equal('ORDER_VOIDED');
                expect(error.response.message).to.contain('Order has been voided');
                expect(error.response.debug_id).to.not.be.empty;
                done();
            });
        });

        it('capture fails for completed order', function (done) {
            paypal.order.capture(captured_order_id, capture_details, function (error, order) {
                expect(error.response.name).to.equal('ORDER_ALREADY_COMPLETED');
                expect(error.response.message).to.contain('Order has already been voided, expired or completed');
                expect(error.response.debug_id).to.not.be.empty;
                done();
            });
        });

        it('void fails for captured order', function (done) {
            paypal.order.void(captured_order_id, function (error, order) {
                expect(error.response.name).to.equal('ORDER_CANNOT_BE_VOIDED');
                expect(error.response.message).to.contain('Order is in captured state and hence cannot be voided.');
                expect(error.response.debug_id).to.not.be.empty;
                done();
            });
        });

        it('execute succeeds for approved order', function (done) {
            paypal.payment.execute(approved_payment_id, { "payer_id" : payer_id }, function (error, payment) {
                expect(payment.httpStatusCode).to.equal(200);
                expect(payment.id).to.equal(approved_payment_id);
                expect(payment.state).to.equal('approved');
                expect(payment.intent).to.equal('order');
                expect(payment.payer.payment_method).to.equal('paypal');
                expect(payment.payer.payer_info.payer_id).to.equal(payer_id);
                done();
            });
        });

        it('authorize order success', function (done) {
            paypal.order.authorize(executed_order_id, authorize_details, function (error, authorization) {
                expect(error).equal(null);
                expect(authorization.httpStatusCode).equal(200);
                expect(authorization.id).to.not.be.empty;
                expect(authorization.state).to.equal('authorized');
                expect(authorization.amount.total).to.equal(authorize_details.amount.total);
                expect(authorization.parent_payment).to.not.be.empty;
                done();
            });
        });

        it('capture authorized order success', function (done) {
            paypal.order.capture(authorized_order_id, capture_details, function (error, capture) {
                expect(error).equal(null);
                expect(capture.id).to.not.be.empty;
                expect(capture.amount.total).to.equal(capture_details.amount.total);
                expect(capture.is_final_capture).to.equal(true);
                expect(capture.state).to.equal('completed');
                expect(capture.parent_payment).to.not.be.empty;
                done();
            });
        });

        it('void success', function (done) {
            paypal.order.void(order_id, function (error, order) {
                expect(error).equal(null);
                expect(order.id).to.equal(order_id);
                expect(order.state).to.equal('voided');
                expect(order.parent_payment).to.not.be.empty;
                done();
            });
        });
    });
});
