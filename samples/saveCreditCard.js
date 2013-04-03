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
    "type": "visa",
    "number": "4417119669820331",
    "expire_month": "11",
    "expire_year": "2019",
    "cvv2": "012",
    "first_name": "Joe",
    "last_name": "Shopper"
};

paypal_api.credit_card.create(savedCard, config_opts, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Save Credit Card Response");
        console.log(JSON.stringify(get_res));
    }

});