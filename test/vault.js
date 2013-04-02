 var chai = require('chai'),
 	expect = chai.expect,
 	should = chai.should();

 var paypal_sdk = require('../');

var http_default_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

 var cardData = {
 	"type": "visa",
 	"number": "4417119669820331",
 	"expire_month": "11",
 	"expire_year": "2018",
 	"first_name": "Joe",
 	"last_name": "Shopper"
 };

 describe('SDK', function() {
 	describe('#Vault api ', function() {
 		it('Create and Get', function(done) {

 				// Store Credit Card with PayPal 
 				paypal_sdk.credit_card.create(cardData, http_default_opts, function(res, err) {
 					if (err) {
 						console.log(err);;
 					}
 					if (res) {
 						console.log("Create creditcard response :");
 						console.log("-----------------------");
 						console.log(res);
 						should.exist(res.id);
 						expect(res.id).to.contain('CARD');
 						// Look up credit card detail 
 						paypal_sdk.credit_card.get(res.id, http_default_opts, function(res, err) {
 							if (err) {
 								console.log(err);
 							}
 							if (res) {
 								console.log("Get creditcard response :");
 								console.log("-----------------------");
 								console.log(res);
 								should.exist(res.id);
 								expect(res.id).to.contain('CARD');
 								done();
 							}

 						})
 					}
 				})
 		})
 	})
 })