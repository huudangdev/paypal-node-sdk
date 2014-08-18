/* Copyright 2014 PayPal */
"use strict";

var generate = require('./generate');
var api = require('../api');

function invoice() {
    var baseURL = '/v1/invoicing/invoices/';
    var operations = ['create', 'get', 'list', 'del', 'cancel'];

    var ret = {
        baseURL: baseURL,
        search: function search(data, config, cb) {
            api.executeHttp('POST', '/v1/invoicing/search', data, config, cb);
        },
        update: function update(id, data, config, cb) {
            api.executeHttp('PUT', this.baseURL + id, data, config, cb);
        },
        send: function send(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/send', {}, config, cb);
        },
        remind: function remind(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/remind', data, config, cb);
        }
    };
    ret = generate.mixin(ret, operations, baseURL);
    return ret;
}

module.exports = invoice;