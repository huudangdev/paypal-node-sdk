/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var parameters = {"page_size": 15,
                "start_time": "2014-10-06T11:00:00Z",
                "end_time": "2014-10-06T11:00:00Z"
                };

paypal.notification.webhookEvent.list(parameters, function (error, webhookEvents) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Search webhookEvents Response");
        console.log(JSON.stringify(webhookEvents));
    }
});
