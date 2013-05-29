/* Copyright 2013 PayPal */
"use strict";
var paypal_api = require('../../');
require('../configure');

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http:\/\/localhost\/test\/rest\/rest-api-sdk-php\/sample\/payments\/ExecutePayment.php?success=true",
        "cancel_url": "http:\/\/localhost\/test\/rest\/rest-api-sdk-php\/sample\/payments\/ExecutePayment.php?success=false"
    },
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};


paypal_api.payment.create(create_payment_json, function (err, res) {
    if (err) {
        throw err;
    }

    if (res) {
        console.log("Create Payment Response");
        console.log(res);
    }
});
