/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var invoiceId = "INV2-GLJ8-9FA2-26BB-GHLU";

paypal_api.invoice.send(invoiceId, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Send Invoice Response");
        console.log(rv);
    }
});
