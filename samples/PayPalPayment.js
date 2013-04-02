/* Copyright 2013 PayPal */
"use strict";

// Sandbox Creds - 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM', 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
// VPS 16 Creds - 'EB6t3j2rIX5k59S6z2YMznpIBsel5qLWCwE88TT1HhKY', 'EGgy5gXmQC5Wtibks-81aJZIBsel5qLWCwE88TT1HhKY'

var paypal_api = require('../');

var http_default_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};


var create_payment_json = {
	"intent": "sale",
	"payer": {
		"payment_method": "paypal"
	},
	"redirect_urls": {
		"return_url": "http:\/\/localhost\/test\/rest\/rest-api-sdk-php\/sample\/payments\/ExecutePayment.php?success=true",
		"cancel_url": "http:\/\/localhost\/test\/rest\/rest-api-sdk-php\/sample\/payments\/ExecutePayment.php?success=false"
	},
	"transactions": [{
		"amount": {
			"currency": "USD",
			"total": "1.00"
		},
		"description": "This is the payment description."
	}]
};


paypal_api.payment.create(create_payment_json, http_default_opts, function(err, res) {
	if (err) {
		throw err;
	}

	if (res) {
		console.log("Create Payment Response");
		console.log(res);
	}
});