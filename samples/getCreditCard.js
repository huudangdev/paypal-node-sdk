/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

var creditCardId = "CARD-5BT058015C739554AKE2GCEI";

paypal_api.credit_card.get(creditCardId, config_opts, function (get_err, get_res) {
	if (get_err) {
		throw get_res;
	}

	if (get_res) {
		console.log("Retrieve Credit Card Response");
		console.log(JSON.stringify(get_res));
	}

});