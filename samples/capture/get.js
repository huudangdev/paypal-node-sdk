"use strict";

var paypal = require('../../');
require('../configure');

paypal.capture.get("8F148933LY9388354", function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});
