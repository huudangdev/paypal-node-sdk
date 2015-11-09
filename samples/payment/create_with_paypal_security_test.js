/* Copyright 2016 PayPal */
"use strict";
var paypal = require('../../');

paypal.configure({
    'mode': 'security-test-sandbox',
    'client_id': '<CLIENT_ID>',
    'client_secret': '<CLIENT_SECRET>'
});

var create_payment_json = {
    "intent": "sale",
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
                "price": "0.03",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "0.07",
            "details": {
                "subtotal": "0.03",
                "tax": "0.01",
                "shipping": "0.02",
                "handling_fee": "0.01"
            }
        },
        "description": "This is the payment description."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(JSON.stringify(payment, null, 2));
    }
});