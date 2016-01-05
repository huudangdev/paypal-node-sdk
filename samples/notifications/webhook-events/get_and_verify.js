/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require('../../../');
require('../../configure');

var eventBody = '{"id":"WH-7285486103862532R-5WM67492J86746059","create_time":"2015-06-23T15:26:30Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for $ 6.0 USD","resource":{"id":"6F961703H62685926","create_time":"2015-06-23T15:24:25Z","update_time":"2015-06-23T15:25:23Z","amount":{"total":"6.00","currency":"USD","details":{"subtotal":"6.00"}},"payment_mode":"INSTANT_TRANSFER","state":"authorized","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","parent_payment":"PAY-2XG59747K7884911VKWEXUKI","valid_until":"2015-07-22T15:24:25Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2XG59747K7884911VKWEXUKI","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059/resend","rel":"resend","method":"POST"}]}';

paypal.notification.webhookEvent.getAndVerify(eventBody, function (error, response) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(response);
    }
});
