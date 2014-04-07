"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
    describe('Authorization', function () {

        var authorize_payment_details = {
            "intent": "authorize",
            "payer": {
                "payment_method": "credit_card",
                "funding_instruments": [{
                    "credit_card": {
                        "type": "visa",
                        "number": "4417119669820331",
                        "expire_month": "11",
                        "expire_year": "2018"
                    }
                }]
            },
            "transactions": [{
                "amount": {
                    "total": "1.00",
                    "currency": "USD"
                }
            }]
        };

        var capture_details = {
            "amount": { "currency": "USD", "total": "1.00" }
        };

        function create_capture(callback) {
            paypal_sdk.payment.create(authorize_payment_details, function (error, payment) {
                expect(error).equal(null);
                var authorization = payment.transactions[0].related_resources[0].authorization;

                paypal_sdk.authorization.capture(authorization.id, capture_details, function (error, capture) {
                    expect(error).equal(null);
                    expect(capture.state).equal("completed");
                    callback(capture);
                });
            });
        }

        it('get', function (done) {
            create_capture(function (capture) {
                paypal_sdk.capture.get(capture.id, function (error, capture) {
                    expect(error).equal(null);
                    expect(capture.state).equal("completed");
                    done();
                });
            });
        });

        it('refund', function (done) {
            create_capture(function (capture) {
                paypal_sdk.capture.refund(capture.id, {}, function (error, refund) {
                    expect(error).equal(null);
                    expect(refund.state).equal("completed");
                    expect(refund.capture_id).equal(capture.id);
                    done();
                });
            });
        });

    });
});
