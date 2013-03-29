REST API SDK for nodejs (V0.5.0)
================================

This repository contains PayPal's nodejs SDK and samples for REST API.

Prerequisites
-------------

  * nodejs v0.6.0
  * npm dependency 'mocha' and 'chai'
   

Running the sample
------------------

  * Ensure that you have nodejs installed on your machine
  * Navigate to the samples folder and run node app.js
  * Optionally, update the sample file with your own client Id and client secret

Running test case
-----------------

  * Install npm modules specified in prerequisite.
  * Install Mocha javascript test framework, using command 'npm install -g mocha'.
  * You may need to update timeout in local npm cache file suite.js (eg: this._timeout = 60000;).
  * Navigate to SDK root and run mocha at command prompt to run all test cases.
       
Usage
-----

To write an app that uses the SDK
	
  * Copy the paypal-rest-sdk.js file under root lib directory, to your project.
  * Obtain your clientId and client secret from the developer portal.
  * Now you are all set to make your first API call. 
  * Create a reference  variable of paypal-rest-sdk.js in your nodejs file.
  * Create a http_options variable and initialize by invoking 'configure' method. 
  * Generate an authorization token by invoking 'generateToken' method by setting clientId and client secret.
  * Invoke a relevant api (eg: create payment) using your newly generated authorization token.
  * A sample api call is shown below.

  ```js 
  var paypal_sdk = require('./lib/paypal-rest-sdk.js');
		
	var http_default_opts = {
			'host': 'api.sandbox.paypal.com',
			'port': '',
			'headers': {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': ''
			}
	};
	
	paypal_sdk.configure(http_default_opts);
		
	var client_id = 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM';
	var client_secret = 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM';
		
	paypal_sdk.generateToken(client_id, client_secret, function(generatedToken) {
		http_default_opts.headers['Authorization'] = generatedToken;
		paypal_sdk.payment.create(create_payment_data, http_default_opts, function(res,err){
			
			//process your business logic with payment response
		})
	})
  ```

Contributing
------------


More help
---------

   * API Reference (https://developer.paypal.com/webapps/developer/docs/api/)
   * Reporting issues / feature requests 		        
   
