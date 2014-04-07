"use strict";

var paypal_sdk = require('../../');
require('../configure');

var capture_details = {
    "amount": {
        "currency": "USD",
        "total": "4.54"
    },
    "is_final_capture": true
};

paypal_sdk.authorization.capture("5RA45624N3531924N", capture_details, function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});
