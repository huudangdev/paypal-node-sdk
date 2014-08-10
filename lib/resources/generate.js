/* Copyright 2014 PayPal */
"use strict";
var api = require('../api');

function mixin(destObject, operations, baseURL) {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });
    return destObject;
}

var restFunctions = {
    create: function create(data, config, cb) {
        api.executeHttp('POST', this.baseURL, data, config, cb);
    },
    get: function get(id, config, cb) {
        api.executeHttp('GET', this.baseURL + id, {}, config, cb);
    },
    list: function list(data, config, cb) {
        if (typeof data === 'function') {
            config = data;
            data = {};
        }
        api.executeHttp('GET', this.baseURL, data, config, cb);
    },
    del: function del(id, config, cb) {
        api.executeHttp('DELETE', this.baseURL + id, {}, config, cb);
    },
    refund: function refund(id, data, config, cb) {
        api.executeHttp('POST', this.baseURL + id + '/refund', data, config, cb);
    },
    update: function update(id, data, config, cb) {
        api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
    },
    cancel: function cancel(id, data, config, cb) {
        api.executeHttp('POST', this.baseURL + id + '/cancel', data, config, cb);
    }
};

module.exports.mixin = mixin;

