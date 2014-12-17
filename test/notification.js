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

        var eventBody = "{\"id\":\"WH-8UH59159LY570081N-5FX3594634324213T\",\"create_time\":\"2014-10-10T17:36:15Z\",\"resource_type\":\"authorization\",\"event_type\":\"PAYMENT.AUTHORIZATION.CREATED\",\"summary\":\"A successful payment authorization was created for 0.60 USD\",\"resource\":{\"id\":\"2LP967258V024852T\",\"create_time\":\"2014-10-10T17:34:11Z\",\"update_time\":\"2014-10-10T17:35:16Z\",\"amount\":{\"total\":\"0.60\",\"currency\":\"USD\",\"details\":{\"subtotal\":\"0.60\"}},\"payment_mode\":\"INSTANT_TRANSFER\",\"state\":\"authorized\",\"protection_eligibility\":\"ELIGIBLE\",\"protection_eligibility_type\":\"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE\",\"parent_payment\":\"PAY-6FD94763FB485961SKQ4BREY\",\"valid_until\":\"2014-11-08T17:34:11Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/2LP967258V024852T\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/2LP967258V024852T/capture\",\"rel\":\"capture\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/2LP967258V024852T/void\",\"rel\":\"void\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/authorization/2LP967258V024852T/reauthorize\",\"rel\":\"reauthorize\",\"method\":\"POST\"},{\"href\":\"https://api.sandbox.paypal.com/v1/payments/payment/PAY-6FD94763FB485961SKQ4BREY\",\"rel\":\"parent_payment\",\"method\":\"GET\"}]},\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-8UH59159LY570081N-5FX3594634324213T\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-8UH59159LY570081N-5FX3594634324213T/resend\",\"rel\":\"resend\",\"method\":\"POST\"}]}";
        var certURL = "https://api.sandbox.paypal.com/v1/notifications/certs/CERT-360caa42-35c2ed1e-21e9a5d6";
        var actualSignature = "mcLeCd3PZXLR2DYFbcgf/Fzjk0wAaQ0+awY7en8J3w+UxlE5nzwIQIgHAup+x7cCrEWKzSLNSdAw9OCXb+0Pg030OEhP6iSEBr3XcTrfNXhrjz9Mbl35fe7qY6eOM4lJy2vRYAGGj9X2zXNI4Ag4wUIZlc03QRCkvAedGOkopuHXCepeVVgCEIaB4NCHgLKgjpmRaj6bRXdz1Odlm0BrG6pb7Fjw3cbhbBrw6twZugD8d/fj3juUU63UFGp77RGTxtMdnnAfHwlAQYSWRxiKxQbrE0PFZyICRcXd7hgluIv+ts/hqho4vVMi9UkRXfJCtaJ6o/tjDZjnO9rjMnu++g==";
        var transmissionId = "efcfecb0-50a3-11e4-acdb-8d0d8bca8f12";
        var timeStamp = "2014-10-10T17:36:16Z";
        var webhookId = "40Y916089Y8324740";

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
    });
});
