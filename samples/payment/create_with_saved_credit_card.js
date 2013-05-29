/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
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
paypal_api.payment.create(savedCard, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Pay with stored card Response");
        console.log(JSON.stringify(get_res));
    }

});
