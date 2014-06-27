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

paypal_api.billing_plan.create(billingPlanAttributes, function (error, billingPlan) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Billing Plan Response");
        console.log(billingPlan);
    }
});