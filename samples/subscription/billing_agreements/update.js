/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var billingAgreementId = "I-08413VDRU6DE";

var billing_agreement_update_attributes = [
    {
        "op": "replace",
        "path": "/",
        "value": {
            "description": "Newer Description",
            "name": "New Name",
            "shipping_address": {
                "line1": "StayBr111idge Suites",
                "line2": "Cro12ok Street",
                "city": "San Jose",
                "state": "CA",
                "postal_code": "95112",
                "country_code": "US"
            }
        }
    }
];

paypal.billingAgreement.get(billingAgreementId, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Agreement");
        console.log(JSON.stringify(billingAgreement));

        paypal.billingAgreement.update(billingAgreementId, billing_agreement_update_attributes, function (error, response) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(response);
            }
        });
    }
});
