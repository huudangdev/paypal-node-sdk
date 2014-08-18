"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
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
                    "total": "4.00",
                    "currency": "USD"
                }
            }]
        };

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/authorization');
        }

        function create_authorization(callback) {
            paypal.payment.create(authorize_payment_details, function (error, payment) {
                expect(error).equal(null);
                callback(payment.transactions[0].related_resources[0].authorization);
            });
        }

        it('get', function (done) {
            create_authorization(function (authorization) {
                paypal.authorization.get(authorization.id, function (error, authorization) {
                    expect(error).equal(null);
                    expect(authorization.state).equal("authorized");
                    done();
                });
            });
        });

        it('capture', function (done) {
            create_authorization(function (authorization) {
                var capture_details = {
                    "amount": { "currency": "USD", "total": "4.00" }
                };
                paypal.authorization.capture(authorization.id, capture_details, function (error, capture) {
                    expect(error).equal(null);
                    expect(capture.state).equal("completed");
                    done();
                });
            });
        });

        it('void', function (done) {
            create_authorization(function (authorization) {
                paypal.authorization.void(authorization.id, function (error, authorization) {
                    expect(error).equal(null);
                    expect(authorization.state).equal("voided");
                    done();
                });
            });
        });

        it('void partially captured authorization success', function (done) {
            create_authorization(function (authorization) {
                var capture_details = {
                    "amount": { "currency": "USD", "total": "1.00" },
                };
                paypal.authorization.capture(authorization.id, capture_details, function (error, capture) {
                    expect(error).equal(null);
                    paypal.authorization.void(authorization.id, function (error, authorization) {
                        expect(error).equal(null);
                        expect(authorization.state).equal("voided");
                        done();
                    });
                });
            });
        });

        it('void captured authorization failure', function (done) {
            create_authorization(function (authorization) {
                var capture_details = {
                    "amount": { "currency": "USD", "total": "1.00" },
                    "is_final_capture": true
                };
                paypal.authorization.capture(authorization.id, capture_details, function (error, capture) {
                    expect(error).equal(null);
                    paypal.authorization.void(authorization.id, function (error, authorization) {
                        expect(error.httpStatusCode).equal(400);
                        expect(error.response.name).equal("AUTHORIZATION_CANNOT_BE_VOIDED");
                        expect(error.response.information_link).not.be.empty;
                        expect(error.response.debug_id).not.be.empty;
                        done();
                    });
                });
            });
        });

        it('reauthorize', function (done) {
	        var reauthorize_details = {
		        "amount": {
			        "currency": "USD",
			        "total": "4.54"
			    }
		    };
            paypal.authorization.reauthorize("7GH53639GA425732B", reauthorize_details, function (error, authorization) {
                expect(authorization).equal(null);
                expect(error).not.equal(null);
                done();
            });
        });
    });
});
