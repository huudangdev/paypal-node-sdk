/* Copyright 2014 PayPal */
"use strict";
var paypal_api = require('../../');
require('../configure');

var auth_code = {'authorization_code': 'Authorization code from the mobile sdk'};

paypal_api.generate_token(auth_code, function (error, rt) {
    if (error) {
        console.log(error);
        console.log(error.response);
    }  else {
        //Refresh token has long shelf life. It is recommended to store this in a database
        //for future payments
        console.log(rt);
        var refresh_token = rt;

        var future_payment_config = {'correlation_id': 'Correlation ID from mobile sdk', 'refresh_token': refresh_token};

        //Set up payment details
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

        //Create future payment
        paypal_api.payment.create(create_payment_json, future_payment_config, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
        });
    }
});