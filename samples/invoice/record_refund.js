/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-E5FC-V7MH-WDX3-6NYC";

var refund_attr = {
    "date" : "2014-07-06 03:30:00 PST",
    "note" : "Refund provided by cash."
};

paypal.invoice.recordRefund(invoiceId, refund_attr, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Record Payment on Invoice Response");
        console.log(rv);
    }
});
