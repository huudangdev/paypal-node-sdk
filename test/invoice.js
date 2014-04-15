/* Copyright 2013 PayPal */
"use strict";

var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

var paypal_sdk = require('../');
require('./configure');

describe('SDK', function () {
	describe('Invoice', function () {
        var invoice_attributes = {
          "merchant_info": {
            "email": "PPX.DevNet-facilitator@gmail.com",
            "first_name": "Dennis",
            "last_name": "Doctor",
            "business_name": "Medical Professionals, LLC",
            "phone": {
              "country_code": "001",
              "national_number": "5032141716"
            },
              "address": {
              "line1": "1234 Main St.",
              "city": "Portland",
              "state": "OR",
              "postal_code": "97217",
              "country_code": "US"
            }
          },
          "billing_info": [ { "email": "example@example.com" } ],
          "items": [
            {
              "name": "Sutures",
              "quantity": 100,
              "unit_price": {
                "currency": "USD",
                "value": 5
              }
            }
          ],
          "note": "Medical Invoice 16 Jul, 2013 PST",
          "payment_term": {
            "term_type": "NET_45"
          },
          "shipping_info": {
            "first_name": "Sally",
            "last_name": "Patient",
            "business_name": "Not applicable",
            "phone": {
              "country_code": "001",
              "national_number": "5039871234"
            },
            "address": {
              "line1": "1234 Broad St.",
              "city": "Portland",
              "state": "OR",
              "postal_code": "97216",
              "country_code": "US"
            }
          },
          "tax_inclusive": false,
          "total_amount": {
            "currency": "USD",
            "value": "500.00"
          }
        };

        it('create and get success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);
                expect(invoice.id).to.contain('INV2-');

                paypal_sdk.invoice.get(invoice.id, function (error, invoice) {
                    expect(error).equal(null);
                    expect(invoice.status).to.contain('DRAFT');
                    done();
                });
            });
        });

        it('get nonexistent invoice failure', function (done) {
            paypal_sdk.invoice.get('ABRACADABRA', function (error, invoice) {
                expect(error.response.name).to.equal('BUSINESS_ERROR');
                expect(error.response.message).to.equal('Invalid encrypted id.');
                done();
            });
        });

        it('list success', function (done) {
            paypal_sdk.invoice.list(function (error, invoice_history) {
                expect(error).equal(null);
                done();
            });
        });

        it('search success', function (done) {
            var search_attr = {
              "start_invoice_date" : "2010-05-10 PST",
              "end_invoice_date" : "2014-04-10 PST",
              "page" : 1,
              "page_size" : 3,
              "total_count_required" : true
            }
            paypal_sdk.invoice.search(search_attr, function (error, invoice_history) {
                expect(error).equal(null);
                expect(invoice_history.total_count).equal(23);
                expect(invoice_history.invoices.length).equal(3);
                done();
            });
        });
        
        it('update draft invoice success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);
                var quantity_new = 500;
                var amount_new = "2500.00";
                invoice_attributes.items[0].quantity = quantity_new;
                invoice_attributes.total_amount.value = amount_new;

                paypal_sdk.invoice.update(invoice.id, invoice_attributes, function (error, invoice) {
                    expect(error).equal(null);
                    expect(invoice.items[0].quantity).equal(quantity_new);
                    expect(invoice_attributes.total_amount.value).equal(amount_new);
                    done();
                });
            });
        });

        it('update sent invoice success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);

                    var quantity_new = 500;
                    var amount_new = "2500.00";
                    invoice_attributes.items[0].quantity = quantity_new;
                    invoice_attributes.total_amount.value = amount_new;

                    paypal_sdk.invoice.update(invoice.id, invoice_attributes, function (error, invoice) {
                        expect(error).equal(null);
                        expect(invoice.status).to.contain('SENT');
                        expect(invoice.items[0].quantity).equal(quantity_new);
                        expect(invoice_attributes.total_amount.value).equal(amount_new);
                        done();
                    });
                });
            });
        });

        it('update cancelled invoice failure', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var cancel_attr = {
                        "subject": "Past due",
                        "note": "Canceling invoice",
                        "send_to_merchant": true,
                        "send_to_payer": true
                    };

                    paypal_sdk.invoice.cancel(invoice.id, cancel_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv).equal('');

                        var quantity_new = 500;
                        var amount_new = "2500.00";
                        invoice_attributes.items[0].quantity = quantity_new;
                        invoice_attributes.total_amount.value = amount_new;

                        paypal_sdk.invoice.update(invoice.id, invoice_attributes, function (error, invoice) {
                            expect(error.response.message).equal('Already paid/refund/cancelled.');
                            done();
                        });
                    });
                });
            });
        });

        //Test that sending correctly changes status to SENT
        it('send success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);
                expect(invoice.id).to.contain('INV2-');

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);

                    paypal_sdk.invoice.get(invoice.id, function (error, invoice) {
                        expect(error).equal(null);
                        expect(invoice.status).to.contain('SENT');
                        done();
                    });
                });
            });
        });

        it('send fails if items array is absent', function (done) {
            var invoice_attr_wo_items = {
                "merchant_info": {
                    "email": "PPX.DevNet-facilitator@gmail.com",
                    "first_name": "Dennis",
                    "last_name": "Doctor"
                },
                    "billing_info": [ { "email": "example@example.com" 
                }]
            }
            paypal_sdk.invoice.create(invoice_attr_wo_items, function (error, invoice) {
                expect(error).equal(null);
                expect(invoice.id).to.contain('INV2-');

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error.httpStatusCode).equal(400);
                    expect(error.response.name).equal('VALIDATION_ERROR');
                    expect(error.response.details[0].field).equal('items');
                    expect(error.response.details[0].issue).equal('cannot be null or, empty.');
                    done();
                });
            });
        });

        it('remind success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var remind_attr = {
                        "subject": "Past due",
                        "note": "Please pay soon",
                        "send_to_merchant": true
                    };

                    paypal_sdk.invoice.remind(invoice.id, remind_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv).equal('');
                        done();  
                    });
                });
            });
        });

        it('remind does not work for draft invoices', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                var cancel_attr = {
                    "subject": "Past due",
                    "note": "Please pay soon",
                    "send_to_merchant": true
                };

                paypal_sdk.invoice.remind(invoice.id, cancel_attr, function (error, rv) {
                    expect(error.response.message).equal("Cannot send reminder for a draft.");
                    done();
                });
            });
        });

        it('cancel success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var cancel_attr = {
                        "subject": "Past due",
                        "note": "Canceling invoice",
                        "send_to_merchant": true,
                        "send_to_payer": true
                    };

                    paypal_sdk.invoice.cancel(invoice.id, cancel_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv).equal('');

                        paypal_sdk.invoice.get(invoice.id, function (error, invoice) {
                            expect(error).equal(null);
                            expect(invoice.status).to.contain('CANCELLED');
                            done();
                        });
                    });
                });
            });
        });

        it('cancel does not work for draft invoices', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                var cancel_attr = {
                    "subject": "Past due",
                    "note": "Canceling invoice",
                    "send_to_merchant": true,
                    "send_to_payer": true
                };

                paypal_sdk.invoice.cancel(invoice.id, cancel_attr, function (error, rv) {
                    expect(error.response.message).equal("Cannot cancel a draft entity.");
                    done();
                });
            });
        });

        it('delete success', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.delete(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    expect(rv).equal('');

                    paypal_sdk.invoice.get(invoice.id, function (error, invoice) {
                        expect(error.response.message).equal("Resource is already deleted.");
                        done();
                    });
                });
            });
        });

        it('delete only works for draft invoices', function (done) {
            paypal_sdk.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal_sdk.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);

                    paypal_sdk.invoice.delete(invoice.id, function (error, rv) {
                        expect(error.response.message).equal("Only draft can be deleted.");
                        done();  
                    });
                });
            });
        });
    });
});
