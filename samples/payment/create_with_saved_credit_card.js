/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var savedCard = {
    "intent": "sale",
    "payer": {
        "payment_method": "credit_card",
        "funding_instruments": [{
            "credit_card_token": {
                "credit_card_id": "CARD-5BT058015C739554AKE2GCEI"
            }
        }]
    },
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};
paypal.payment.create(savedCard, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Pay with stored card Response");
        console.log(JSON.stringify(payment));
    }

});
