/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

var webhookId = "70Y03947RF112050J";

paypal.notification.webhook.eventTypes(webhookId, function (error, results) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Events for this webhook: ");
        console.log(results);
    }
});
