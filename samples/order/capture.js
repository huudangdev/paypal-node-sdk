"use strict";

var paypal = require('../../');
require('../configure');

var orderId = "O-20L81840AL4365052";

var capture_details = {
    "amount": {
        "currency": "USD",
        "total": "0.70"
    },
    "is_final_capture": true
};

paypal.order.capture(orderId, capture_details, function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});
