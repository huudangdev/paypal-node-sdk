/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var list_billing_plan = {
    'status': 'ACTIVE',
    'page_size': 5,
    'page': 1,
    'total_required': 'yes'
};

paypal.billingPlan.list(list_billing_plan, function (error, billingPlan) {
    if (error) {
        throw error;
    } else {
        console.log("List Billing Plans Response");
        console.log(JSON.stringify(billingPlan));
    }
});
