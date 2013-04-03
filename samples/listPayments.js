/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

var listPayment = {
	'count': '1',
	'start_index': '1'
};

paypal_api.payment.list(listPayment, config_opts, function (get_err, get_res) {
	if (get_err) {
		throw get_res;
	}

	if (get_res) {
		console.log("List Payments Response");
		console.log(JSON.stringify(get_res));
	}

});