/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var webProfileId = "XP-3NWU-L5YK-X5EC-6KJM";

paypal.webProfile.get(webProfileId, function (error, webProfile) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Get Web Profile");
        console.log(JSON.stringify(webProfile));
    }
});
