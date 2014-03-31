/* Copyright 2014 PayPal */

var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
	describe('FuturePayment', function () {
		it('fail with bad auth code', function (done) {
			paypal_sdk.generate_token({'authorization_code': 'invalid_code'}, function (error, generatedToken) {
				expect(error.httpStatusCode).equal(400);
				expect(error.response.error_description).equal('Invalid auth code');
				done();
			});
		});

		//Set up payment details
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

		it('fail with bad refresh token', function (done) {
			paypal_sdk.payment.create(create_payment_json, {'refresh_token': 'invalid_token'}, function (error, payment) {
				expect(error.httpStatusCode).equal(400);
				expect(error.response.error_description).equal('Invalid refresh token');
				done();
			});
		});

	});
});
