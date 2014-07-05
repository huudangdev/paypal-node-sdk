/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-08413VDRU6DE";

var suspend_note = {
    "note": "Suspending the agreement"
};

paypal_api.billing_agreement.suspend(billingAgreementId, suspend_note, function (error, response) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Suspend Billing Agreement Response");
        console.log(response);

        var reactivate_note = {
            "note": "Reactivating the agreement"
        };

        paypal_api.billing_agreement.reactivate(billingAgreementId, reactivate_note, function (error, response) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Reactivate Billing Agreement Response");
                console.log(response);
            }
        });
    }
});