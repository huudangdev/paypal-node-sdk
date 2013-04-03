/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

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
paypal_api.payment.create(savedCard, config_opts, function (get_err, get_res) {
	if (get_err) {
		throw get_res;
	}

	if (get_res) {
		console.log("Pay with stored card Response");
		console.log(JSON.stringify(get_res));
	}

});