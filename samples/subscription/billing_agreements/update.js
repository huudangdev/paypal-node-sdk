/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingAgreementId = "I-THNVHK6X9H0V";

var billing_agreement_update_attributes = [
    {
        "op": "replace",
        "path": "/",
        "value": {
            "description": "New Description",
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

paypal_api.billing_agreement.get(billingAgreementId, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Agreement");
        console.log(JSON.stringify(billingAgreement));

        paypal_api.billing_agreement.update(billingAgreementId, billing_agreement_update_attributes, function (error, response) {
        	if (error) {
        		console.log(error);
        		throw error;
        	} else {
        		console.log(billingAgreement.name);
        		console.log(billingAgreement.description);
        	}
        });
    }
});