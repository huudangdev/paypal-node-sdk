/* Copyright 2015 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

//Name needs to be unique so just generating a random one
var profile_name = Math.random().toString(36).substring(7);

var create_web_profile_json = {
    "name": profile_name,
    "presentation": {
        "brand_name": "Best Brand",
        "logo_image": "https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg",
        "locale_code": "US"
    },
    "input_fields": {
        "allow_note": true,
        "no_shipping": 1,
        "address_override": 1
    },
    "flow_config": {
        "landing_page_type": "billing",
        "bank_txn_pending_url": "http://www.yeowza.com"
    }
};

paypal.webProfile.create(create_web_profile_json, function (error, web_profile) {
    if (error) {
        throw error;
    } else {
        console.log("Create web_profile Response");
        console.log(web_profile);
    }
});
