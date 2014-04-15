/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

paypal_api.invoice.list(function (error, invoices) {
    if (error) {
        throw error;
    } else {
        console.log("List invoices Response");
        console.log(JSON.stringify(invoices));
    }
});