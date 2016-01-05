/**
 * Creating a custom PayPal payment/checkout experience and creating a 
 * payment with it by using the returned id as experience_profile_id in
 * the payment json
 * 
 * Copyright 2015-2016 PayPal, Inc.
 */
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

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://return.url",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

paypal.webProfile.create(create_web_profile_json, function (error, web_profile) {
    if (error) {
        throw error;
    } else {

        //Set the id of the created payment experience in payment json
        var experience_profile_id = web_profile.id;
        create_payment_json.experience_profile_id = experience_profile_id;

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
        });
    }
});


