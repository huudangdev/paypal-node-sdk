/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var invoiceId = "INV2-E5FC-V7MH-WDX3-6NYC";

var height = "400";
var width = "400";

paypal.invoice.qrCode(invoiceId, height, width, function (error, rv) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Invoice get qr code response");
        console.log(rv);
    }
});
