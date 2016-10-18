/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var chai = require('chai'),
    expect = chai.expect;

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('InvoiceTemplate', function () {
        var invoice_template_attributes = function (id) {
            var ret = {
                "name": "Hours Template",
                "default": true,
                "unit_of_measure": "HOURS",
                "template_data": {
                    "items": [{
                        "name": "Nutri Bullet",
                        "quantity": 1,
                        "unit_price": {
                            "currency": "USD",
                            "value": "50.00"
                        }
                    }
                    ],
                    "merchant_info": {
                        "email": "stevendcoffey-facilitator@gmail.com"
                    },
                    "tax_calculated_after_discount": false,
                    "tax_inclusive": false,
                    "note": "Thank you for your business.",
                    "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
                },
                "settings": [
                    {
                        "field_name": "items.date",
                        "display_preference": {
                            "hidden": true
                        }
                    },
                    {
                        "field_name": "custom",
                        "display_preference": {
                            "hidden": true
                        }
                    }
                ]
            };
            if (id !== null) {
                ret.template_id = id;
            }

            return ret;
        };

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/invoice_template');
        }

        it('create and get success', function (done) {
            paypal.invoiceTemplate.create(invoice_template_attributes(null), function (error, invoice_template) {
                expect(error).equal(null);
                expect(invoice_template.template_id).equal("TEMP-XYZ");

                paypal.invoiceTemplate.get(invoice_template.template_id, function (error, invoice_template) {
                    expect(error).equal(null);
                    expect(invoice_template.unit_of_measure).equal("HOURS");
                    done();
                });
            });
        });

        it('get nonexistent invoice template failure', function (done) {
            paypal.invoiceTemplate.get('not-an-invoice-template', function (error, invoice_template) {
                expect(error.response.name).to.equal('BUSINESS_ERROR');
                expect(error.response.message).to.equal('Invalid encrypted id.');
                done();
            });
        });

        it('list success', function (done) {
            paypal.invoiceTemplate.list(function (error, invoice_template_history) {
                expect(error).equal(null);
                expect(invoice_template_history.templates.length).equal(1);
                done();
            });
        });

        it('update invoice template success', function (done) {
            var invoice_template = invoice_template_attributes("TEMP-XYZ");
            invoice_template.name = "Hours Template - modified";

            paypal.invoiceTemplate.update(invoice_template.template_id, invoice_template, function (error, invoice_template) {
                expect(error).equal(null);
                expect(invoice_template.name).equal("Hours Template - modified");
                done();
            });
        });

        it('delete invoice template success', function (done) {
            var invoice_template = invoice_template_attributes("TEMP-XYZ");

            paypal.invoiceTemplate.delete(invoice_template.template_id, function (error, data) {
                expect(error).equal(null);
                done();
            });
        });
    });
});
