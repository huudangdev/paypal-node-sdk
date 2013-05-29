/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var paymentId = "PAY-0XL713371A312273YKE2GCNI";


paypal_api.payment.get(paymentId, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Get Payment Response");
        console.log(JSON.stringify(get_res));
    }

});
