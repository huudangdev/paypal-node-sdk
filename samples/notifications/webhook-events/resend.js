/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../../../');
require('../../configure');

var webhookEventId = 'WH-1S115631EN580315E-9KH94552VF7913711';

paypal.notification.webhookEvent.resend(webhookEventId, function (error, webhookEventTypes) {
    if (error) {
        throw error;
    } else {
        console.log("List webhookEventTypes Response");
        console.log(JSON.stringify(webhookEventTypes));
    }
});
