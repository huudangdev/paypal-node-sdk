/* Copyright 2015 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function payoutItem() {
    var baseURL = '/v1/payments/payouts-item/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL,
        cancel: function cancel(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/cancel', {}, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = payoutItem;
