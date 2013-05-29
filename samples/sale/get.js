/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var saleId = "3RM92092UW5126232";

paypal_api.sale.get(saleId, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Get Sale Details Response");
        console.log(JSON.stringify(get_res));
    }

});
