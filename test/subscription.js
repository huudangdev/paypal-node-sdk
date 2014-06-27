/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
    describe('Subscription', function () {
        var billing_plan_attributes = {
            "name": "Fast Speed Plan",
            "description": "Template creation.",
            "type": "fixed",
            "payment_definitions": [
                {
                    "name": "Payment Definition-1",
                    "type": "REGULAR",
                    "frequency": "MONTH",
                    "frequency_interval": "2",
                    "amount": {
                        "value": "100",
                        "currency": "USD"
                    },
                    "cycles": "12",
                    "charge_models": [
                        {
                            "type": "SHIPPING",
                            "amount": {
                                "value": "10",
                                "currency": "USD"
                            }
                        },
                        {
                            "type": "TAX",
                            "amount": {
                                "value": "12",
                                "currency": "USD"
                            }
                        }
                    ]
                }
            ],
            "merchant_preferences": {
                "setup_fee": {
                    "value": "1",
                    "currency": "USD"
                },
                "return_url": "http://www.paypal.com",
                "cancel_url": "http://www.yahoo.com",
                "autobill_amount": "YES",
                "initial_amount_fail_action": "CONTINUE",
                "max_fail_attempts": "0"
            }
        };

        var billing_plan_update_attributes = [
            {
                "op": "replace",
                "path": "/",
                "value": {
                    "state": "ACTIVE"
                }
            }
        ];

        var update_merchant_preferences = [
            {
                "op":"replace",
                "path":"/merchant-preferences",
                "value" : {
                    "cancel_url":"http://www.paypal123.com",
                    "setup_fee": {
                        "value" :"22",
                        "currency" : "USD"
                    }
                }
            ]

        var billing_agreement_attributes = {
            "name": "Fast Speed Agreement",
            "description": "Agreement for Fast Speed Plan",
            "start_date": "2015-02-19T00:37:04Z",
            "plan": {
                "id": "P-0NJ10521L3680291SOAQIVTQ"
            },
            "payer": {
                "payment_method": "paypal"
            },
            "shipping_address": {
                "line1": "StayBr111idge Suites",
                "line2": "Cro12ok Street",
                "city": "San Jose",
                "state": "CA",
                "postal_code": "95112",
                "country_code": "US"
            }
        };

        var billing_agreement_update_attributes = [
            {
                "op": "replace",
                "path": "/",
                "value": {
                    "description": "New Description",
                    "name": "New Name",
                    "shipping_address": {
                        "line1": "StayBr111idge Suites",
                        "line2": "Cro12ok Street",
                        "city": "San Jose",
                        "state": "CA",
                        "postal_code": "95112",
                        "country_code": "US"
                    }
                }
            }
        ];
        /*
        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/subscription');
        }
        */

        it('billing plan create and get success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                expect(billingPlan.id).to.contain('P-');

                paypal_sdk.billing_plan.get(billingPlan.id, function (error, billingPlan) {
                    expect(error).equal(null);
                    expect(billingPlan.state).to.contain('CREATED');
                    done();
                });
            });
        });

        it('get nonexistent billing plan failure', function (done) {
            paypal_sdk.billing_plan.get('ABRACADABRA', function (error, billingPlan) {
                expect(error.response.name).to.equal('BUSINESS_ERROR');
                expect(error.response.message).to.equal('Invalid encrypted id.');
                done();
            });
        });

        it('list success', function (done) {
            paypal_sdk.billing_plan.list(function (error, billingPlan_history) {
                expect(error).equal(null);
                done();
            });
        });

        it('activate billing plan (update status to active) success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                expect(billingPlan.state).equal("CREATED");

                //wont work as patch returns a 204 so cannot expect billingPlan to be returned
                //consider update vs replace
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    expect(response.httpStatusCode).equal(204);
                    expect(billingPlan.state).equal("ACTIVE");
                    done();
                });
            });
        });

        it('update merchant preferences for billing plan success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                expect(billingPlan.state).equal("CREATED");

                paypal_sdk.billing_plan.update(billingPlan.id, update_merchant_preferences, function (error, response) {
                    expect(error).equal(null);
                    expect(response.httpStatusCode).equal(204);
                   
                    paypal_sdk.billing_plan.get(billingPlan.id, function (error, billingPlan) {
                        expect(error).equal(null);
                        expect(billingPlan.merchant_preferences.setup_fee.value).to.equal('22');
                        expect(billingPlan.merchant_preferences.cancel_url).to.equal('http://www.paypal123.com');
                        done();
                    });
                });
            });
        });

        it('billing agreement create from billing plan success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                expect(billingPlan.state).equal("CREATED");

                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    expect(response.httpStatusCode).equal(204);
                    expect(billingPlan.state).equal("ACTIVE");

                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');
                        expect(billingAgreement.name).to.equal(billing_agreement_attributes.name);
                        expect(billingAgreement.plan.id).to.equal(billing_agreement_attributes.plan.id);
                        done();
                    });
                });
            });
        });

        it('billing agreement create from billing plan and get success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                expect(billingPlan.state).equal("CREATED");

                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    expect(response.httpStatusCode).equal(204);
                    expect(billingPlan.state).equal("ACTIVE");

                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');

                        paypal_sdk.billing_agreement.get(billingAgreement.id, function (error, billingAgreement) {
                            expect(billingAgreement.name).to.equal(billing_agreement_attributes.name);
                            expect(billingAgreement.plan.id).to.equal(billing_agreement_attributes.plan.id);
                            done();
                        });
                    });
                });
            });
        });

        it('billing agreement execute after create from billing plan success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);

                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    expect(response.httpStatusCode).equal(204);

                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');
                        expect(billingAgreement).to.have.property('links');

                        for (var index = 0; index < billingAgreement.links.length; index++) {
                            if (billingAgreement.links[index].rel === 'execute') {
                                expect(billingAgreement.links[index].href).to.contain('agreement-execute');
                            }
                        }
                        done();
                    });
                });
            });
        });

        it('billing agreement update success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');

                        paypal_sdk.billing_agreement.update(billingAgreement.id, billing_agreement_update_attributes, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);
                            expect(billingAgreement.name).equal(billing_agreement_update_attributes.value.name);
                            expect(billingAgreement.description).equal(billing_agreement_update_attributes.value.description);
                            done();
                        });
                    });
                });
            });
        });

        it('billing agreement suspend success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');

                        var suspend_note = {
                            "note": "Suspending the agreement"
                        };

                        paypal_sdk.billing_agreement.suspend(billingAgreement.id, suspend_note, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);
                            done();
                        });
                    });
                });
            });
        });

        it('billing agreement reactivate success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');

                        paypal_sdk.billing_agreement.suspend(billingAgreement.id, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);

                            var reactivate_note = {
                                "note": "Reactivating the agreement"
                            };

                            paypal_sdk.billing_agreement.reactivate(billingAgreement.id, reactivate_note, function (error, response) {
                                expect(error).equal(null);
                                expect(response.httpStatusCode).equal(204);
                                done();
                            });
                        });
                    });
                });
            });
        });

        it('search transactions for billing agreement finds none', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);

                        paypal_sdk.billing_agreement.search_transactions(billingAgreement.id, function (error, response) {
                            expect(response).to.have.property('agreement_transaction_list');
                            expect(response.agreement_transaction_list).to.be.empty();
                            done();
                        });
                    });
                });
            });
        });

        it('billing agreement cancel success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);
                        expect(billingAgreement.id).to.contain('I-');

                        var cancel_note = {
                            "note": "Canceling the agreement"
                        };

                        paypal_sdk.billing_agreement.cancel(billingAgreement.id, cancel_note, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);
                            done();
                        });
                    });
                });
            });
        });

        it('set outstanding agreement amounts success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);

                        var outstanding_amount = {
                            "value" : "100",
                            "currency" : "USD"
                        };

                        paypal_sdk.billing_agreement.set_balance(billingAgreement.id, outstanding_amount, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);
                            done();
                        });
                    });
                });
            });
        });

        it('bill outstanding agreement amounts success', function (done) {
            paypal_sdk.billing_plan.create(billing_plan_attributes, function (error, billingPlan) {
                expect(error).equal(null);
                paypal_sdk.billing_plan.update(billingPlan.id, billing_plan_update_attributes, function (error, response) {
                    expect(error).equal(null);
                    billing_agreement_attributes.plan.id = billingPlan.id;
                    paypal_sdk.billing_agreement.create(billing_agreement_attributes, function (error, billingAgreement) {
                        expect(error).equal(null);

                        var outstanding_amount = {
                            "value" : "100",
                            "currency" : "USD"
                        };
                        paypal_sdk.billing_agreement.set_balance(billingAgreement.id, outstanding_amount, function (error, response) {
                            expect(error).equal(null);
                            expect(response.httpStatusCode).equal(204);

                            var outstanding_amount_note = {
                                "note": "Billing Balance Amount",
                                "amount": outstanding_amount
                            };
                            paypal_sdk.billing_agreement.bill_balance(billingAgreement.id, outstanding_amount_note, function (error, response) {
                                expect(error).equal(null);
                                expect(response.httpStatusCode).equal(204);
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
});