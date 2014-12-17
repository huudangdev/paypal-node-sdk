/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var listPayment = {
    'count': '1',
    'start_index': '1'
};

paypal.payment.list(listPayment, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("List Payments Response");
        console.log(JSON.stringify(payment));
    }
});
