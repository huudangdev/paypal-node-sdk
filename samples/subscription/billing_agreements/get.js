/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-08413VDRU6DE";

paypal_api.billing_agreement.get(billingAgreementId, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Agreement");
        console.log(JSON.stringify(billingAgreement));
    }
});