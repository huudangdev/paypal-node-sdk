/* Copyright 2014 PayPal */
"use strict";

var openid = require('./open-id-connect');
var configuration = require('./configure');
var api = require('./api');

module.exports = function () {
    return {
        version: configuration.sdk_version,
        configure: function (options) {
            api.configure(options);
        },
        configuration: configuration.default_options,
        generateToken: function (config, cb) {
            api.generateToken(config, cb);
        },
        payment: require('./resources/Payment')(),
        sale: require('./resources/Sale')(),
        refund: require('./resources/Refund')(),
        authorization: require('./resources/Authorization')(),
        capture: require('./resources/Capture')(),
        billingPlan: require('./resources/BillingPlan')(),
        billingAgreement: require('./resources/BillingAgreement')(),
        creditCard: require('./resources/CreditCard')(),
        invoice: require('./resources/Invoice')(),
        openid_connect: {
            tokeninfo: {
                create: function (data, config, cb) {
                    if (typeof data === 'string') {
                        data = { 'code': data };
                    }
                    data.grant_type = 'authorization_code';
                    openid.tokenInfoRequest(data, config, cb);
                },
                refresh: function (data, config, cb) {
                    if (typeof data === 'string') {
                        data = { 'refresh_token': data };
                    }
                    data.grant_type = 'refresh_token';
                    openid.tokenInfoRequest(data, config, cb);
                }
            },
            authorize_url: openid.authorize_url,
            logout_url: openid.logout_url,
            userinfo: {
                get: openid.userInfoRequest
            }
        }
        //openIdConnect: require('./resources/OpenIdConnect')()
    };
};