/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var billingPlanId = "P-6KX77264SV996415P6K4MZZY";

paypal_api.billing_plan.get(billingPlanId, function (error, billingPlan) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Billing Plan");
        console.log(JSON.stringify(billingPlan));
    }
});
