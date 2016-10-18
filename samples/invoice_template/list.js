/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var util = require('./util');
var paypal = require('../../');
require('../configure');

paypal.invoiceTemplate.create(util.invoice_template_json(), function (error, invoice_template) {
    paypal.invoiceTemplate.list(function (error, invoice_templates) {
        if (error) {
            throw error;
        } else {
            console.log("List Invoice Template Response:");
            console.log(invoice_templates);
        }
    });
});

