/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-9DRB-YTHU-2V9Q-7Q24";

paypal.invoice.get(invoiceId, function (error, invoice) {
    if (error) {
        throw error;
    } else {
        console.log("Get Invoice Response");
        console.log(JSON.stringify(invoice));
    }
});
