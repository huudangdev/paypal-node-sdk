/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var savedCard = {
    "type": "visa",
    "number": "4417119669820331",
    "expire_month": "11",
    "expire_year": "2019",
    "cvv2": "123",
    "first_name": "Joe",
    "last_name": "Shopper"
};

paypal.creditCard.create(savedCard, function (error, credit_card) {
    if (error) {
        throw error;
    } else {
        console.log("Save Credit Card Response");
        console.log(JSON.stringify(credit_card));
    }

});
