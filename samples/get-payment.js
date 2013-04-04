/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

var config_opts = {
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
    'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
};

var paymentId = "PAY-0XL713371A312273YKE2GCNI";


paypal_api.payment.get(paymentId, config_opts, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Get Payment Response");
        console.log(JSON.stringify(get_res));
    }

});