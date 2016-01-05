/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

//Name needs to be unique so just generating a random one
var profile_name = Math.random().toString(36).substring(7);

var webProfileId = "XP-3NWU-L5YK-X5EC-6KJM";

var update_web_profile_json = {
    "name": profile_name,
    "presentation": {
        "logo_image": "https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg"
    },
    "input_fields": {
        "no_shipping": 1,
        "address_override": 0
    },
    "flow_config": {
        "landing_page_type": "billing",
        "bank_txn_pending_url": "http://www.yeowza.com"
    }
};

paypal.webProfile.update(webProfileId, update_web_profile_json, function (error, webProfile) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Update webProfile Response");
        console.log(webProfile);
    }
});
