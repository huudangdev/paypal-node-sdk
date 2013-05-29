/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var listPayment = {
    'count': '1',
    'start_index': '1'
};

paypal_api.payment.list(listPayment, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("List Payments Response");
        console.log(JSON.stringify(get_res));
    }

});
