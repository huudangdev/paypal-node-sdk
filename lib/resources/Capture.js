/* Copyright 2014 PayPal */
"use strict";

var generate = require('./generate');

function Capture() {
    var baseURL = '/v1/payments/capture/';
    var operations = ['get', 'refund'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = Capture;