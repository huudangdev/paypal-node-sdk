/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

// Sends the webhook event data to PayPal to verify the webhook event signature is correct and 
// the event data came from PayPal.

// Note this sample is only for illustrative purposes. You must have a valid webhook configured with your
// client ID and secret. This sample may not work due to other tests deleting and creating webhooks.

// Normally, you would pass all the HTTP request headers sent in the Webhook Event, but creating a
// JSON object here for the sample.
var certURL = "https://api.sandbox.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-a5cafa77";
var transmissionId = "103e3700-8b0c-11e6-8695-6b62a8a99ac4";
var transmissionSignature = "t8hlRk64rpEImZMKqgtp5dlWaT1W8ed/mf8Msos341QInVn3BMQubjAhM/cKiSJtW07VwJvSX7X4+YUmHBrm5BQ+CEkClke4Yf4ouhCK6GWsfs0J8cKkmjI0XxfJpPLgjROEWY3MXorwCtbvrEo5vrRI2+TyLkquBKAlM95LbNWG43lxMu0LHzsSRUBDdt5IP1b2CKqbcEJKGrC78iw+fJEQGagkJAiv3Qvpw8F/8q7FCQAZ3c81mzTvP4ZH3Xk2/nNznEA7eMi3u1EjSpTmLfAb423ytX37Ts0QpmPNgxJe8wnMB/+fvt4xjYH6KNe+bIcYU30hUIe9O8c9UFwKuQ==";
var transmissionTimestamp = "2016-10-05T14:57:40Z";
var headers = {
    'paypal-auth-algo': 'SHA256withRSA',
    'paypal-cert-url': certURL,
    'paypal-transmission-id': transmissionId,
    'paypal-transmission-sig': transmissionSignature,
    'paypal-transmission-time': transmissionTimestamp
};

// The eventBody parameter is the entire webhook event body.
var eventBody = '{"id":"WH-82L71649W50323023-5WC64761VS637831A","event_version":"1.0","create_time":"2016-10-05T14:57:40Z","resource_type":"sale","event_type":"PAYMENT.SALE.COMPLETED","summary":"Payment completed for $ 6.01 USD","resource":{"id":"8RS6210148826604N","state":"completed","amount":{"total":"6.01","currency":"USD","details":{"subtotal":"3.00","tax":"0.01","shipping":"1.00","handling_fee":"2.00","shipping_discount":"3.00"}},"payment_mode":"INSTANT_TRANSFER","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","transaction_fee":{"value":"0.47","currency":"USD"},"invoice_number":"","custom":"Hello World!","parent_payment":"PAY-11X29866PC6848407K72RIQA","create_time":"2016-10-05T14:57:18Z","update_time":"2016-10-05T14:57:26Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/sale/8RS6210148826604N","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/sale/8RS6210148826604N/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-11X29866PC6848407K72RIQA","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-82L71649W50323023-5WC64761VS637831A","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-82L71649W50323023-5WC64761VS637831A/resend","rel":"resend","method":"POST"}]}';

// The webhookId is the ID of the configured webhook (can find this in the PayPal Developer Dashboard or
// by doing a paypal.webhook.list()
var webhookId = "3TR748995U920805P";

paypal.notification.webhookEvent.verify(headers, eventBody, webhookId, function (error, response) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(response);

        // Verification status must be SUCCESS
        if (response.verification_status === "SUCCESS") {
            console.log("It was a success.");
        } else {
            console.log("It was a failed verification");
        }
    }
});
