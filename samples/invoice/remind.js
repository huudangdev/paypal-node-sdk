/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-GLJ8-9FA2-26BB-GHLU";

var options = {
    "subject": "Past due",
    "note": "Please pay soon",
    "send_to_merchant": true
};

//Cannot be in DRAFT status for remind
paypal.invoice.remind(invoiceId, options, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Remind Invoice Response");
        console.log(rv);
    }
});
