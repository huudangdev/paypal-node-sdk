/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

var saleId = "3RM92092UW5126232";

paypal.sale.get(saleId, function (error, sale) {
    if (error) {
        throw error;
    } else {
        console.log("Get Sale Details Response");
        console.log(JSON.stringify(sale));
    }

});
