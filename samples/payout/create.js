/* Copyright 2015 PayPal

Create a batch payout, by default in asynchronous mode.

*/
"use strict";
var paypal = require('../../');
require('../configure');

var sender_batch_id = Math.random().toString(36).substring(9);

var create_payout_json = {
    "sender_batch_header": {
        "sender_batch_id": sender_batch_id,
        "email_subject": "You have a payment"
    },
    "items": [
        {
            "recipient_type": "EMAIL",
            "amount": {
                "value": 0.99,
                "currency": "USD"
            },
            "receiver": "shirt-supplier-one@mail.com",
            "note": "Thank you.",
            "sender_item_id": "item_1"
        },
        {
            "recipient_type": "EMAIL",
            "amount": {
                "value": 0.90,
                "currency": "USD"
            },
            "receiver": "shirt-supplier-two@mail.com",
            "note": "Thank you.",
            "sender_item_id": "item_2"
        },
        {
            "recipient_type": "EMAIL",
            "amount": {
                "value": 2.00,
                "currency": "USD"
            },
            "receiver": "shirt-supplier-three@mail.com",
            "note": "Thank you.",
            "sender_item_id": "item_3"
        }
    ]
};

paypal.payout.create(create_payout_json, function (error, payout) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Create Payout Response");
        console.log(payout);
    }
});
