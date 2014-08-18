/* Copyright 2013 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var creditCardId = "CARD-5BT058015C739554AKE2GCEI";

paypal.credit_card.get(creditCardId, function (error, credit_card) {
    if (error) {
        throw error;
    } else {
        console.log("Retrieve Credit Card Response");
        console.log(JSON.stringify(credit_card));
    }

});
