/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var invoiceId = "INV2-JSN3-NVZG-QAR3-JZQY";

paypal_api.invoice.delete(invoiceId, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Delete Invoice Response");
        console.log(rv);
    }
});