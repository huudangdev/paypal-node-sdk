/* Copyright 2014 PayPal */
"use strict";

var generate = require('../generate');
var api = require('../api');

function billingAgreement() {
    var baseURL = '/v1/payments/billing-agreements/';
    var operations = ['create', 'get', 'update', 'cancel'];

    var ret = {
        baseURL: baseURL,
        execute: function execute(token, data, config, cb) {
            api.executeHttp('POST', this.baseURL + token + '/agreement-execute', data, config, cb);
        },
        suspend: function suspend(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/suspend', data, config, cb);
        },
        reactivate: function reactivate(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/re-activate', data, config, cb);
        },
        billBalance: function billBalance(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/bill-balance', data, config, cb);
        },
        setBalance: function setBalance(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/set-balance', data, config, cb);
        },
        searchTransactions: function searchTransactions(id, start_date, end_date, config, cb) {
            var date_range = {
                "start-date": start_date,
                "end-date": end_date
            };
            api.executeHttp('GET', this.baseURL + id + '/transaction', date_range, config, cb);
        }
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = billingAgreement;
