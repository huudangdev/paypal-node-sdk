/* Copyright 2014 PayPal */
"use strict";

var generate = require('./generate');

function CreditCard() {
    var baseURL = '/v1/payments/credit-card/';
    var operations = ['create', 'get', 'update', 'delete'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = CreditCard;