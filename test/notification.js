/* Copyright 2015 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('Notification', function () {
        var webhook_event_types = [
            {
                "name": "PAYMENT.AUTHORIZATION.CREATED"
            },
            {
                "name": "PAYMENT.AUTHORIZATION.VOIDED"
            }
        ];
        var webhook_attributes = {
            "url": "https://www.yeowza.com/ppwebhook",
            "event_types": webhook_event_types
        };

        var webhook_id = '6HY79521VR978045E';
        var webhook_event_id = 'WH-1S115631EN580315E-9KH94552VF7913711';
        var bad_webhook_event_id = 'abracadabra';

        var search_parameters = {
            "page_size": 10,
            "start_time": "2014-10-20T11:42:25Z",
            "end_time": "2014-10-21T16:47:29Z"
        };

        var eventBody = '{"id":"WH-0G2756385H040842W-5Y612302CV158622M","create_time":"2015-05-18T15:45:13Z","resource_type":"sale","event_type":"PAYMENT.SALE.COMPLETED","summary":"Payment completed for $ 20.0 USD","resource":{"id":"4EU7004268015634R","create_time":"2015-05-18T15:44:02Z","update_time":"2015-05-18T15:44:21Z","amount":{"total":"20.00","currency":"USD"},"payment_mode":"INSTANT_TRANSFER","state":"completed","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","parent_payment":"PAY-86C81811X5228590KKVNARQQ","transaction_fee":{"value":"0.88","currency":"USD"},"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-86C81811X5228590KKVNARQQ","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M/resend","rel":"resend","method":"POST"}]}';
        var invalidJSON = '{"id"H-0G2756385H040842W-5Y612302CV158622M","create_time":"2015-05-18T15:45:13Z","resource_type":"sale","event_type":"PAYMENT.SALE.COMPLETED","summary":"Payment completed for $ 20.0 USD","resource":{"id":"4EU7004268015634R","create_time":"2015-05-18T15:44:02Z","update_time":"2015-05-18T15:44:21Z","amount":{"total":"20.00","currency":"USD"},"payment_mode":"INSTANT_TRANSFER","state":"completed","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","parent_payment":"PAY-86C81811X5228590KKVNARQQ","transaction_fee":{"value":"0.88","currency":"USD"},"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-86C81811X5228590KKVNARQQ","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M/resend","rel":"resend","method":"POST"}]}';
        var invalidIdJSON = '{"id":"H-0G2756385H040842W-5Y612302CV158622M","create_time":"2015-05-18T15:45:13Z","resource_type":"sale","event_type":"PAYMENT.SALE.COMPLETED","summary":"Payment completed for $ 20.0 USD","resource":{"id":"4EU7004268015634R","create_time":"2015-05-18T15:44:02Z","update_time":"2015-05-18T15:44:21Z","amount":{"total":"20.00","currency":"USD"},"payment_mode":"INSTANT_TRANSFER","state":"completed","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","parent_payment":"PAY-86C81811X5228590KKVNARQQ","transaction_fee":{"value":"0.88","currency":"USD"},"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/sale/4EU7004268015634R/refund","rel":"refund","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-86C81811X5228590KKVNARQQ","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0G2756385H040842W-5Y612302CV158622M/resend","rel":"resend","method":"POST"}]}';
        var eventBodyValid = '{"id":"WH-7285486103862532R-5WM67492J86746059","create_time":"2015-06-23T15:26:30Z","resource_type":"authorization","event_type":"PAYMENT.AUTHORIZATION.CREATED","summary":"A successful payment authorization was created for $ 6.0 USD","resource":{"id":"6F961703H62685926","create_time":"2015-06-23T15:24:25Z","update_time":"2015-06-23T15:25:23Z","amount":{"total":"6.00","currency":"USD","details":{"subtotal":"6.00"}},"payment_mode":"INSTANT_TRANSFER","state":"authorized","protection_eligibility":"ELIGIBLE","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","parent_payment":"PAY-2XG59747K7884911VKWEXUKI","valid_until":"2015-07-22T15:24:25Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/capture","rel":"capture","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/void","rel":"void","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/authorization/6F961703H62685926/reauthorize","rel":"reauthorize","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/payment/PAY-2XG59747K7884911VKWEXUKI","rel":"parent_payment","method":"GET"}]},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-7285486103862532R-5WM67492J86746059/resend","rel":"resend","method":"POST"}]}';
        var certURL = "https://api.sandbox.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-a5cafa77";
        var actualSignature = "thy4/U002quzxFavHPwbfJGcc46E8rc5jzgyeafWm5mICTBdY/8rl7WJpn8JA0GKA+oDTPsSruqusw+XXg5RLAP7ip53Euh9Xu3UbUhQFX7UgwzE2FeYoY6lyRMiiiQLzy9BvHfIzNIVhPad4KnC339dr6y2l+mN8ALgI4GCdIh3/SoJO5wE64Bh/ueWtt8EVuvsvXfda2Le5a2TrOI9vLEzsm9GS79hAR/5oLexNz8UiZr045Mr5ObroH4w4oNfmkTaDk9Rj0G19uvISs5QzgmBpauKr7Nw++JI0pr/v5mFctQkoWJSGfBGzPRXawrvIIVHQ9Wer48GR2g9ZiApWg==";
        var transmissionId = "dfb3be50-fd74-11e4-8bf3-77339302725b";
        var timeStamp = "2015-05-18T15:45:13Z";
        var webhookId = "4JH86294D6297924G";

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/notification');
        }

        it('webhook create and get success', function (done) {
            paypal.notification.webhook.create(webhook_attributes, function (error, webhook) {
                expect(error).equal(null);
                expect(webhook.httpStatusCode).to.equal(201);

                paypal.notification.webhook.get(webhook.id, function (error, webhook) {
                    expect(error).equal(null);
                    expect(webhook.links).to.not.be.empty;
                    expect(webhook.event_types.length).to.equal(2);
                    done();
                });
            });
        });

        it('webhook duplicate name failure', function (done) {
            paypal.notification.webhook.create(webhook_attributes, function (error, webhook) {
                expect(error).equal(null);
                expect(webhook.httpStatusCode).to.equal(201);

                paypal.notification.webhook.create(webhook_attributes, function (error, webhook) {
                    expect(error.httpStatusCode).to.equal(400);
                    expect(error.response.name).to.equal('WEBHOOK_URL_ALREADY_EXISTS');
                    done();
                });
            });
        });

        it('webhook get event types success', function (done) {
            paypal.notification.webhook.eventTypes(webhook_id, function (error, response) {
                expect(error).equal(null);
                expect(response.event_types).to.not.be.empty;
                expect(response.httpStatusCode).to.equal(200);
                done();
            });
        });

        it('search webhook events success', function (done) {
            paypal.notification.webhookEvent.list(search_parameters, function (error, response) {
                expect(response.events).to.be.a('array');
                expect(response.count).to.be.a('number');
                done();
            });
        });

        it('search webhook events throws start date invalid for date earlier than 45 days', function (done) {

            search_parameters.start_time = "2013-10-20T11:42:25Z";
            search_parameters.end_time = "2013-10-21T16:47:29Z";

            paypal.notification.webhookEvent.list(search_parameters, function (error, response) {
                expect(error.response.name).to.equal('VALIDATION_ERROR');
                expect(error.response.message).to.equal('Invalid data provided');
                expect(error.response.details[0].field).to.equal('start_time');
                expect(error.response.details[0].issue).to.equal('Invalid data provided');
                done();
            });
        });

        it('resend webhook events success', function (done) {
            paypal.notification.webhookEvent.resend(webhook_event_id, function (error, event) {
                expect(event.httpStatusCode).to.equal(202);
                expect(event.id).to.not.be.empty;
                done();
            });
        });

        it('resend webhook events failure', function (done) {
            paypal.notification.webhookEvent.resend(bad_webhook_event_id, function (error, response) {
                expect(error.httpStatusCode).to.equal(404);
                expect(error.response.name).to.equal('INVALID_RESOURCE_ID');
                done();
            });
        });

        it('verify webhook event success', function (done) {
            paypal.notification.webhookEvent.verify(certURL, transmissionId, timeStamp, webhookId, eventBody, actualSignature, function (error, response) {
                expect(response).to.equal(true);
                done();
            });
        });

        it('get and verify webhook event success', function (done) {
            paypal.notification.webhookEvent.getAndVerify(eventBodyValid, function (error, response) {
                expect(response).to.equal(true);
                done();
            });
        });

        it('get and verify webhook event failure with invalid json', function (done) {
            paypal.notification.webhookEvent.getAndVerify(invalidJSON, function (error, response) {
                expect(response).to.equal(false);
                expect(error.message).to.equal('Webhook Event Id attribute not found. Possible reason could be invalid JSON Object.');
                done();
            });
        });

        it('get and verify webhook event failure with invalid id', function (done) {
            paypal.notification.webhookEvent.getAndVerify(invalidIdJSON, function (error, response) {
                expect(response).to.equal(false);
                expect(error.response.name).to.equal('INVALID_RESOURCE_ID');
                done();
            });
        });
    });
});
