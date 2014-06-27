/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-THNVHK6X9H0V";

var date_range = {
    "start-date": "2014-07-01",
    "end-date": "2014-07-20"
};

paypal_api.billing_agreement.search_transactions(billingAgreementId, date_range, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log("Billing Agreement Transactions Search Response");
        console.log(results);
    }
});

