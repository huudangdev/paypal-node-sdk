REST API SDK for nodejs (V0.5.0)
================================

This repository contains PayPal's nodejs SDK and samples for REST API.

Prerequisites
-------------

  * nodejs v0.6.0
  * mocha and chai unit test framework

Install npm dependencies
------------------------

    npm install
    npm install -g mocha

To run sample
------------------

	node samples/app

To run the tests
-----------------

	mocha -t 15000 (timeout is specified in milliseconds eg: 15000ms)
       
Usage
-----

To write an app using the SDK
	
  * Register for a developer account and get your client_id and secret at [PayPal Developer Portal](https://developer.paypal.com).
  * Get a reference for 'paypal-rest-sdk' npm in your file.
  * Create a variable http_options, with required parameters (host, port, client_id, secret) etc.  
  * Invoke the rest api (eg: store a credit card) with required parameters (eg: data, http_options, callback).

  ```js 
    var paypal_sdk = require('paypal-rest-sdk');
		
	var http_options ={
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
	};
	
	var card_data = {
	 	"type": "visa",
	 	"number": "4417119669820331",
	 	"expire_month": "11",
	 	"expire_year": "2018",
	 	"first_name": "Joe",
	 	"last_name": "Shopper"
	 };
 	
	paypal_sdk.credit_card.create(card_data, http_options, function(res,err){
		if (err) {
			console.log(err);
			throw err;
		}
		if (res) {
			console.log("Create Credit-Card Response");
			console.log(res);
		}
	})
   ```

REST api documentation
----------------------

   [REST APIs Reference] (https://developer.paypal.com/webapps/developer/docs/api/)
   
