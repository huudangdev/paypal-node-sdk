/* Copyright 2015 PayPal */
"use strict";
var paypal = require('../../');

var first_config = {
    'mode': 'sandbox',
    'client_id': '<FIRST_CLIENT_ID>',
    'client_secret': '<FIRST_CLIENT_SECRET>'
};

var second_config = {
    'mode': 'sandbox',
    'client_id': '<SECOND_CLIENT_ID>',
    'client_secret': '<SECOND_CLIENT_SECRET>'
};

//This sets up client id and secret globally
//to FIRST_CLIENT_ID and FIRST_CLIENT_SECRET
paypal.configure(first_config);

var create_payment_json = {
    "intent": "authorize",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://return.url",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

//Passing in the second_config here would override default settings
//and use SECOND_CLIENT_ID and SECOND_CLIENT_SECRET for creating the payment
//After buyer approves the payment via the HATEOS approval url, the second_config
//would need to be passed in the payment.execute call as well, otherwise
//a 404 with INVALID_RESOURCE_ID would get returned
paypal.payment.create(create_payment_json, second_config, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});
