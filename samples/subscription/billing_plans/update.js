/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

var billingPlanId = "P-81N60167551920806A4TNCYQ";

var billing_plan_update_attributes = [
    {
        "op": "replace",
        "path": "/",
        "value": {
            "state": "ACTIVE"
        }
    }
];

paypal.billingPlan.get(billingPlanId, function (error, billingPlan) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Plan");
        console.log(JSON.stringify(billingPlan));

        paypal.billingPlan.update(billingPlanId, billing_plan_update_attributes, function (error, response) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                paypal.billingPlan.get(billingPlanId, function (error, billingPlan) {
                    if (error) {
                        console.log(error.response);
                        throw error;
                    } else {
                        console.log(billingPlan.state);
                    }
                });
            }
        });
    }
});
