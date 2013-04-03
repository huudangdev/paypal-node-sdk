/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
	'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

var data = {
	"amount": {
		"currency": "USD",
		"total": "0.01"
	}
},
saleId = "3RM92092UW5126232";

paypal_api.sale.refund(saleId, data, config_opts, function (get_err, get_res) {
	if (get_err) {
		throw get_res;
	}

	if (get_res) {
		console.log("Refund Sale Response");
		console.log(JSON.stringify(get_res));
	}

});