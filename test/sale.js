var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');

var http_default_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': ''
};

paypal_sdk.configure(http_default_opts);

var client_id = 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM';
var client_secret = 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM';

var refund_data = {
	"amount": {
		"total": "2.34",
		"currency": "USD"
	}
};

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
				"cvv2": 874,
				"first_name": "Joe",
				"last_name": "Shopper",
				"billing_address": {
					"line1": "52 N Main ST",
					"city": "Johnstown",
					"country_code": "US",
					"postal_code": "43210",
					"state": "OH"
				}
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


describe('SDK', function() {
	describe('#Sale api ', function() {
		it('Get and refund', function(done) {
			// Generate Token
			paypal_sdk.generateToken(client_id, client_secret, function(generatedToken) {
				console.log("Token generated " + generatedToken);
				if (!http_default_opts.headers) {
					http_default_opts['headers'] = {};
				}
				http_default_opts.headers['Authorization'] = generatedToken;
				// Making a payment 
				paypal_sdk.payment.create(create_payment_data, http_default_opts, function(res, err) {
					if (err) {
						console.log(err);
					}
					if (res) {
						console.log("Create payment response :");
						console.log("-----------------------");
						console.log(res);
						should.exist(res.id);
						expect(res.id).to.contain('PAY');
						var sale_id = res.transactions[0].related_resources[0].sale.id;
						console.log("sale_id : " + sale_id);

						// Getting a sale transaction for a completed payment
						paypal_sdk.sale.get(sale_id, http_default_opts, function(res, err) {
							if (err) {
								console.log(err);
							}
							if (res) {
								console.log("Get sale response :");
								console.log("-----------------------");
								console.log(res);
								should.exist(res.id);
								// Refund a sale 
								paypal_sdk.sale.refund(res.id, refund_data, http_default_opts, function(res, err) {
									if (err) {
										console.log(err);
									}
									if (res) {
										console.log("Get refund response :");
										console.log("-----------------------");
										console.log(res);
										should.exist(res.id);
										done();
									}

								})
							}

						})
					}

				})
			})

		})
	})
})