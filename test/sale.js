/* Copyright 2015 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

var refund_data = {
    "amount": {
        "total": "2.34",
        "currency": "USD"
    }
};

describe('SDK', function () {
    describe('Sale', function () {

        var create_payment_data = {
            "intent": "sale",
            "payer": {
                "payment_method": "credit_card",
                "funding_instruments": [{
                    "credit_card": {
                        "number": "4417119669820331",
                        "type": "visa",
                        "expire_month": 11,
                        "expire_year": 2018,
                        "cvv2": 874
                    }
                }]
            },
            "transactions": [{
                "amount": {
                    "total": "7.47",
                    "currency": "USD",
                    "details": {
                        "subtotal": "7.41",
                        "tax": "0.03",
                        "shipping": "0.03"
                    }
                },
                "description": "This is the payment transaction description."
            }]
        };

        function create_sale(callback) {

            if (process.env.NOCK_OFF !== 'true') {
                require('./mocks/sale');
            }

            paypal.payment.create(create_payment_data, function (error, payment) {
                expect(error).equal(null);
                callback(payment.transactions[0].related_resources[0].sale);
            });
        }

        it('get', function (done) {
            create_sale(function (sale) {
                paypal.sale.get(sale.id, function (error, sale) {
                    expect(error).equal(null);
                    expect(sale.state).equal("completed");
                    done();
                });
            });
        });

        it('refund', function (done) {
            create_sale(function (sale) {
                paypal.sale.refund(sale.id, {}, function (error, refund) {
                    expect(error).equal(null);
                    expect(refund.state).equal("completed");
                    expect(refund.sale_id).equal(sale.id);
                    done();
                });
            });
        });

    });
});
