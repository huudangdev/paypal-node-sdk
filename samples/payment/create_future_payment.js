/* Copyright 2013 PayPal */
"use strict";
var paypal_api = require('../../');
require('../configure');

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

refresh_token = ''
correlation_id = ''

paypal_api.payment.create(create_payment_json, refresh_token, correlation_id, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});