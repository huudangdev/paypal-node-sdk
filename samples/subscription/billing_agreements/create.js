/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingPlanAttributes = {
    "name": "Fast Speed Plan",
    "description": "Template creation.",
    "type": "fixed",
    "payment_definitions": [
        {
            "name": "Payment Definition-1",
            "type": "REGULAR",
            "frequency": "MONTH",
            "frequency_interval": "2",
            "amount": {
                "value": "100",
                "currency": "USD"
            },
            "cycles": "12",
            "charge_models": [
                {
                    "type": "SHIPPING",
                    "amount": {
                        "value": "10",
                        "currency": "USD"
                    }
                },
                {
                    "type": "TAX",
                    "amount": {
                        "value": "12",
                        "currency": "USD"
                    }
                }
            ]
        }
    ],
    "merchant_preferences": {
        "setup_fee": {
            "value": "1",
            "currency": "USD"
        },
        "return_url": "http://www.paypal.com",
        "cancel_url": "http://www.yahoo.com",
        "autobill_amount": "YES",
        "initial_amount_fail_action": "CONTINUE",
        "max_fail_attempts": "0"
    }
};

var billingPlanUpdateAttributes = [
    {
        "op": "replace",
        "path": "/",
        "value": {
            "state": "ACTIVE"
        }
    }
];

var billingAgreementAttributes = {
    "name": "Fast Speed Agreement",
    "description": "Agreement for Fast Speed Plan",
    "start_date": "2015-02-19T00:37:04Z",
    "plan": {
        "id": "P-0NJ10521L3680291SOAQIVTQ"
    },
    "payer": {
        "payment_method": "paypal"
    },
    "shipping_address": {
        "line1": "StayBr111idge Suites",
        "line2": "Cro12ok Street",
        "city": "San Jose",
        "state": "CA",
        "postal_code": "95112",
        "country_code": "US"
    }
};

// Create the billing plan
paypal_api.billing_plan.create(billingPlanAttributes, function (error, billingPlan) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Billing Plan Response");
        console.log(billingPlan);

        // Change status to active
        paypal_api.billing_plan.update(billingPlan.id, billingPlanUpdateAttributes, function (error, response) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Billing Plan state changed to " + billingPlan.state);
                billingAgreementAttributes.plan.id = billingPlan.id

                // Use activated billing plan to create agreement
                paypal_api.billing_agreement.create(billingAgreementAttributes, function (error, billingAgreement) {
                    if (error) {
                        console.log(error);
                        throw error;
                    } else {
                        console.log("Create Billing Agreement Response");
                        console.log(billingAgreement);
                    }
                }
            });
        });
    }
});


