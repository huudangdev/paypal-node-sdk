/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var paypal = require('../');
require('./configure');

describe('SDK', function () {
    describe('Invoice Extra: QrCode Refunds Payments', function () {
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
            "billing_info": [{
                "email": "example@example.com"
            }],
            "items": [{
                "name": "Sutures",
                "quantity": 100,
                "unit_price": {
                    "currency": "USD",
                    "value": 5
                }
            }],
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

        if (process.env.NOCK_OFF !== 'true') {
            require('./mocks/invoice_qrcode_refund_payment');
        }

        it('generate qr code on invoice success', function (done) {
            paypal.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var height = "400";
                    var width = "400";

                    paypal.invoice.qrCode(invoice.id, height, width, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv.image).to.not.equal(null);
                        expect(rv.httpStatusCode).equal(200);
                        done();
                    });
                });
            });
        });

        it('record payment on invoice success', function (done) {
            paypal.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var payment_attr = {
                        "method" : "CASH",
                        "date" : "2014-07-06 03:30:00 PST",
                        "note" : "Cash received."
                    };

                    paypal.invoice.recordPayment(invoice.id, payment_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv.httpStatusCode).equal(204);
                        done();
                    });
                });
            });
        });

        it('deletes external payment on payment success', function (done) {
            paypal.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var payment_attr = {
                        "method" : "CASH",
                        "date" : "2014-07-06 03:30:00 PST",
                        "note" : "Cash received."
                    };

                    paypal.invoice.recordPayment(invoice.id, payment_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv.httpStatusCode).equal(204);

                        paypal.invoice.deleteExternalPayment(invoice.id, '1', function (error, rv) {
                            expect(error).equal(null);
                            expect(rv.httpStatusCode).equal(204);
                            done();
                        });
                    });
                });
            });
        });

        it('record refund on invoice success', function (done) {
            paypal.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var payment_attr = {
                        "method" : "CASH",
                        "date" : "2014-07-06 03:30:00 PST",
                        "note" : "Cash received."
                    };

                    paypal.invoice.recordPayment(invoice.id, payment_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv.httpStatusCode).equal(204);

                        var refund_attr = {
                            "date" : "2014-07-06 03:30:00 PST",
                            "note" : "Refund provided by cash."
                        };

                        paypal.invoice.recordRefund(invoice.id, refund_attr, function (error, rv) {
                            expect(error).equal(null);
                            expect(rv.httpStatusCode).equal(204);
                            done();
                        });
                    });
                });
            });
        });

        it('deletes external refund on refund success', function (done) {
            paypal.invoice.create(invoice_attributes, function (error, invoice) {
                expect(error).equal(null);

                paypal.invoice.send(invoice.id, function (error, rv) {
                    expect(error).equal(null);
                    var payment_attr = {
                        "method" : "CASH",
                        "date" : "2014-07-06 03:30:00 PST",
                        "note" : "Cash received."
                    };

                    paypal.invoice.recordPayment(invoice.id, payment_attr, function (error, rv) {
                        expect(error).equal(null);
                        expect(rv.httpStatusCode).equal(204);
                        var refund_attr = {
                            "date" : "2014-07-06 03:30:00 PST",
                            "note" : "Refund provided by cash."
                        };

                        paypal.invoice.recordRefund(invoice.id, refund_attr, function (error, rv) {
                            expect(error).equal(null);
                            expect(rv.httpStatusCode).equal(204);

                            paypal.invoice.deleteExternalRefund(invoice.id, '1', function (error, rv) {
                                expect(error).equal(null);
                                expect(rv.httpStatusCode).equal(204);
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
});
