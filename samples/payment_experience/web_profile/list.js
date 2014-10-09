/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

paypal.webProfile.list(function (error, webProfiles) {
    if (error) {
        throw error;
    } else {
        console.log("List Web Profiles Response");
        console.log(JSON.stringify(webProfiles));
    }
});
