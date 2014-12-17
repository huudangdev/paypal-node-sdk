/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../');
require('../configure');

var payoutId = "R3LFR867ESVQY";

paypal.payout.get(payoutId, function (error, payout) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Payout Response");
        console.log(JSON.stringify(payout));
    }
});
