/* Copyright 2014 PayPal */
"use strict";

var generate = require('./generate');

function BillingPlan() {
    var baseURL = '/v1/payments/billing-plans/';
    var operations = ['create', 'get', 'list', 'update'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = BillingPlan;
