/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var saleId = "3RM92092UW5126232";

paypal_api.sale.get(saleId, function (error, sale) {
    if (error) {
        throw error;
    } else {
        console.log("Get Sale Details Response");
        console.log(JSON.stringify(sale));
    }

});
