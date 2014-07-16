/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-08413VDRU6DE";

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

        paypal_api.billing_plan.get(billingAgreementId, function (error, billingPlan) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(billingPlan.state);
            }
        });
    }
});