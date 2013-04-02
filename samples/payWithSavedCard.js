/* Copyright 2013 PayPal */
"use strict";

// Sandbox Creds - 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM', 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
// VPS 16 Creds - 'EB6t3j2rIX5k59S6z2YMznpIBsel5qLWCwE88TT1HhKY', 'EGgy5gXmQC5Wtibks-81aJZIBsel5qLWCwE88TT1HhKY'

var paypal_api = require('../');

var token = null;

var http_default_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': ''
	}
};

paypal_api.configure(http_default_opts);

var client_id = 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM';
var client_secret = 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM';

paypal_api.generateToken(client_id, client_secret, function(generatedToken) {
	token = generatedToken;
	console.log("The Generated Token is " + token);

	http_default_opts.headers['Authorization'] = token;

    paypal_api.payment.create(savedCard, http_default_opts, function(get_res, get_err) {
				if (get_err) {
					throw get_res;
				}

				if (get_res) {
					console.log("Pay with stored card Response");
					console.log(JSON.stringify(get_res));
				}

			});
});
var savedCard = {
	"intent": "sale",
	"payer": {
		"payment_method": "credit_card",
		"funding_instruments": [{
			"credit_card_token": {
				"credit_card_id": "CARD-5BT058015C739554AKE2GCEI"
			}
		}]
	},
	"transactions": [{
		"amount": {
			"currency": "USD",
			"total": "1.00"
		},
		"description": "This is the payment description."
	}]
};