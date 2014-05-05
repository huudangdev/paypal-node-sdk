/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
	describe('Payment', function () {
        var create_payment_json_card = {
            "intent": "sale",
            "payer": {
                "payment_method": "credit_card",
                "funding_instruments": [{
                    "credit_card": {
                        "type": "visa",
                        "number": "4417119669820331",
                        "expire_month": "11",
                        "expire_year": "2018",
                        "cvv2": "874"
                    }
                }]
            },
            "transactions": [{
                "amount": {
                    "total": "7",
                    "currency": "USD",
                    "details": {
                        "subtotal": "5",
                        "tax": "1",
                        "shipping": "1"
                    }
                },
                "description": "This is the payment transaction descriptiön."
            }]
        };

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/payment');
        }

        it('create with credit_card', function (done) {
            paypal_sdk.payment.create(create_payment_json_card, function (error, payment) {
                expect(error).equal(null);
                expect(payment.id).to.contain('PAY-');

                paypal_sdk.payment.get(payment.id, function (error, payment) {
                    expect(error).equal(null);
                    expect(payment.state).to.contain('approved');
                    done();
                });
            });
        });


        it('list', function (done) {
            paypal_sdk.payment.list({ "count": 2 }, function (error, payment_history) {
                expect(error).equal(null);
                expect(payment_history.count).equal(2);
                done();
            });
        });
    });
});
