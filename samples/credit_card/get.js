/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var creditCardId = "CARD-5BT058015C739554AKE2GCEI";

paypal_api.credit_card.get(creditCardId, function (get_err, get_res) {
    if (get_err) {
        throw get_res;
    }

    if (get_res) {
        console.log("Retrieve Credit Card Response");
        console.log(JSON.stringify(get_res));
    }

});
