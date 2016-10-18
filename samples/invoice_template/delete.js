/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');
var util = require('./util');

paypal.invoiceTemplate.create(util.invoice_template_json(), function (error, invoice_template) {
    paypal.invoiceTemplate.delete(invoice_template.template_id, function (error, rv) {
        if (error) {
            throw error;
        } else {
            console.log("Successfully deleted invoice template");
        }
    });
});
