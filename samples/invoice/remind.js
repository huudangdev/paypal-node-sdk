/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var invoiceId = "INV2-GLJ8-9FA2-26BB-GHLU";

var options = {
    "subject": "Past due",
    "note": "Please pay soon",
    "send_to_merchant": true
};

//Cannot be in DRAFT status for remind
paypal_api.invoice.remind(invoiceId, options, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Remind Invoice Response");
        console.log(rv);
    }
});