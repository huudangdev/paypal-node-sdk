/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var generate = require('../generate');

function invoiceTemplate() {
    var baseURL = '/v1/invoicing/templates/';
    var operations = ['create', 'get', 'list', 'delete', 'update'];
    
    var ret = {
        baseURL: baseURL
    };

    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = invoiceTemplate;
