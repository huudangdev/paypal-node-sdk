/* Complete example of a future payment after consent has been granted on a mobile device.
   Authorization code from mobile sdk is replaced from refresh token which is used to create 
   a charge. In practice, the refresh token would be stored, mapped to the consenting customer.
   When customer makes a payment in future, the correlation id obtained from mobile device
   should be passed in while charging the customer.

   Copyright 2015 PayPal
*/

"use strict";
var paypal = require('../../');
require('../configure');

var auth_code = {'authorization_code': 'Authorization code from the mobile sdk'};

paypal.generateToken(auth_code, function (error, rt) {
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
        paypal.payment.create(create_payment_json, future_payment_config, function (error, payment) {
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
