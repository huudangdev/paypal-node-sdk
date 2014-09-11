/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-JSN3-NVZG-QAR3-JZQY";

paypal.invoice.del(invoiceId, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Delete Invoice Response");
        console.log(rv);
    }
});
