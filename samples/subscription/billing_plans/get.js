/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingPlanId = "P-0NJ10521L3680291SOAQIVTQ";

paypal_api.billing_plan.get(billingPlanId, function (error, billingPlan) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Plan");
        console.log(JSON.stringify(billingPlan));
    }
});
