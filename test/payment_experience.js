/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('Payment Experience', function () {
        describe('Web Profile', function () {

            var create_web_profile_json = {
                "name": "Best Brand Checkout Experience",
                "presentation": {
                    "brand_name": "Best Brand",
                    "logo_image": "https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg",
                    "locale_code": "US"
                },
                "input_fields": {
                    "allow_note": true,
                    "no_shipping": 1,
                    "address_override": 1
                },
                "flow_config": {
                    "landing_page_type": "billing",
                    "bank_txn_pending_url": "http://www.yeowza.com"
                }
            };

            if (process.env.NOCK_OFF !== 'true') {
                require('./mocks/payment_experience');
            }

            var experience_profile_id = 'XP-3NWU-L5YK-X5EC-6KJM';

            it('create payment experience success', function (done) {
                paypal.webProfile.create(create_web_profile_json, function (error, web_profile) {
                    expect(error).equal(null);
                    expect(web_profile.id).to.contain('XP-');
                    expect(web_profile.httpStatusCode).to.equal(201);
                    done();
                });
            });

            it('create payment experience duplicate name failure', function (done) {
                var profile_name = "wezsmmtpgb9";
                create_web_profile_json.name = profile_name;
                paypal.webProfile.create(create_web_profile_json, function (error, web_profile) {
                    expect(error).equal(null);
                    expect(web_profile.id).to.contain('XP-');
                    expect(web_profile.httpStatusCode).to.equal(201);

                    paypal.webProfile.create(create_web_profile_json, function (error, response) {
                        expect(error.httpStatusCode).to.equal(400);
                        expect(error.response.name).to.equal('VALIDATION_ERROR');
                        expect(error.response.details[0].issue).to.equal('A profile with this name already exists');
                        done();
                    });
                });
            });

            it('list payment experience success', function (done) {
                paypal.webProfile.list(function (error, web_profile_list) {
                    expect(error).equal(null);
                    expect(web_profile_list.httpStatusCode).to.equal(200);
                    expect(web_profile_list[0].id).to.not.be.empty;
                    expect(web_profile_list[0].name).to.not.be.empty;
                    done();
                });
            });

            it('get payment experience success', function (done) {
                paypal.webProfile.get(experience_profile_id, function (error, experience_profile) {
                    expect(error).equal(null);
                    expect(experience_profile.id).to.equal(experience_profile_id);
                    expect(experience_profile.flow_config).to.not.be.empty;
                    expect(experience_profile.presentation.logo_image).to.not.be.empty;
                    expect(experience_profile.httpStatusCode).to.equal(200);
                    done();
                });
            });

            it('replace payment experience success', function (done) {

                paypal.webProfile.get(experience_profile_id, function (error, experience_profile) {
                    expect(error).equal(null);

                    var web_profile_update_attributes = [
                        {
                            "op": "add",
                            "path": "/presentation/brand_name",
                            "value": "new_brand_name"
                        }
                    ];

                    paypal.webProfile.replace(experience_profile_id, web_profile_update_attributes, function (error, response) {
                        expect(experience_profile.httpStatusCode).to.equal(200);
                        done();
                    });
                });
            });

            it('update payment experience success', function (done) {

                var update_web_profile_json = {
                    "name": experience_profile_id,
                    "presentation": {
                        "logo_image": "https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg"
                    },
                    "input_fields": {
                        "no_shipping": 1,
                        "address_override": 0
                    },
                    "flow_config": {
                        "landing_page_type": "billing",
                        "bank_txn_pending_url": "http://www.yeowza.com"
                    }
                };

                paypal.webProfile.update(experience_profile_id, update_web_profile_json, function (error, webProfile) {
                    expect(error).equal(null);
                    expect(webProfile.httpStatusCode).to.equal(204);
                    done();
                });
            });

            it('get nonexistent web Profile failure', function (done) {
                paypal.webProfile.get('ABRACADABRA', function (error, billing_plan) {
                    expect(error.response.name).to.equal('INVALID_RESOURCE_ID');
                    done();
                });
            });
        });
    });
});
