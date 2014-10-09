/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

var webProfileId = "XP-3NWU-L5YK-X5EC-6KJM";

var web_profile_update_attributes = [
    {
        "op": "add",
        "path": "/presentation/brand_name",
        "value": "new_brand_name"
    }
];

paypal.webProfile.get(webProfileId, function (error, webProfile) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(JSON.stringify(webProfile));

        paypal.webProfile.replace(webProfileId, web_profile_update_attributes, function (error, response) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(response);
            }
        });
    }
});
