"use strict";

var paypal_sdk = require('../../');
require('../configure');

paypal_sdk.authorization.void("6CR34526N64144512", function (error, authorization) {
    if (error) {
        console.error(error);
    } else {
        console.log(authorization);
    }
});
