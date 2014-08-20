/* Copyright 2014 PayPal */
"use strict";

var configuration = require('./configure');
var api = require('./api');

module.exports = function () {
    return {
        version: configuration.sdkVersion,
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
        order: require('./resources/Order')(),
        billingPlan: require('./resources/BillingPlan')(),
        billingAgreement: require('./resources/BillingAgreement')(),
        creditCard: require('./resources/CreditCard')(),
        invoice: require('./resources/Invoice')(),
        openIdConnect: require('./resources/OpenIdConnect')()
    };
};