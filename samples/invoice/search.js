/* Copyright 2013 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var search_attr = {
    "start_invoice_date": "2010-05-10 PST",
    "end_invoice_date": "2014-04-10 PST",
    "page": 1,
    "page_size": 3,
    "total_count_required": true
};

paypal.invoice.search(search_attr, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log("Invoice Search Response");
        console.log(results);
    }
});
