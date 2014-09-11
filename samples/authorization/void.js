"use strict";

var paypal = require('../../');
require('../configure');

paypal.authorization.void("6CR34526N64144512", function (error, authorization) {
    if (error) {
        console.error(error);
    } else {
        console.log(authorization);
    }
});
