/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../');
require('../configure');

var payoutItemId = "PZ9BGDMXNACYN";

paypal.payoutItem.cancel(payoutItemId, function (error, payoutItemDetails) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Cancel payoutItem Response");
        console.log(JSON.stringify(payoutItemDetails));
    }
});
