/* Copyright 2013 PayPal */
"use strict";

var paypal_sdk = require('../../');
require('../configure');

var reauthorize_details = {
    "amount": {
        "currency": "USD",
        "total": "4.54" }
    };

paypal_sdk.authorization.reauthorize("7GH53639GA425732B", reauthorize_details, function (error, reauthorization) {
    if (error) {
        console.error(error);
    } else {
        console.log(reauthorization);
    }
});
