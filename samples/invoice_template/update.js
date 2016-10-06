/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var util = require('./util');
var paypal = require('../../');
require('../configure');

paypal.invoiceTemplate.create(util.invoice_template_json(), function (error, invoice_template) {
    invoice_template.name = "Nutri-Rocket Awesome Template 9000";
    paypal.invoiceTemplate.update(invoice_template.invoice_id, invoice_template, function (error, invoice_templates) {
        if (error) {
            console.log(error.response.details);
            throw error;
        } else {
            console.log("Update Invoice Template Response:");
            console.log(invoice_templates);
        }
    });
});
