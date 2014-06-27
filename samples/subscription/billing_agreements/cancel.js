/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-THNVHK6X9H0V";

var cancel_note = {
    "note": "Canceling the agreement"
};

paypal_api.billing_agreement.cancel(billingAgreementId, cancel_note, function (error, response) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Cancel Billing Agreement Response");
        console.log(response);
    }
});