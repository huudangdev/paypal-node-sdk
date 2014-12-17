/* Copyright 2015 PayPal */

// Refer to https://developer.paypal.com/docs/integration/direct/explore-payment-capabilities/
// to and https://developer.paypal.com/docs/release-notes/#updates-for-13-august-2014 to explore
// extra payment options available such as fee, tax, shipping discount, invoice number etc.

"use strict";
var paypal = require('../../');
require('../configure');

var create_payment_json = {
    "intent": "sale",
    "redirect_urls": {
        "return_url": "http://www.return.com",
        "cancel_url": "http://www.cancel.com"
    },
    "payer": {
        "payment_method": "paypal",
        "payer_info": {
            "tax_id_type": "BR_CPF",
            "tax_id": "Fh618775690"
        }
    },
    "transactions": [
        {
            "amount": {
                "total": "34.07",
                "currency": "USD",
                "details": {
                    "subtotal": "30.00",
                    "tax": "0.07",
                    "shipping": "1.00",
                    "handling_fee": "1.00",
                    "shipping_discount": "1.00",
                    "insurance": "1.00"
                }
            },
            "description": "This is the payment transaction description.",
            "custom": "EBAY_EMS_90048630024435",
            "invoice_number": "48787589677",
            "payment_options": {
                "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
            },
            "soft_descriptor": "ECHI5786786",
            "item_list": {
                "items": [
                    {
                        "name": "bowling",
                        "description": "Bowling Team Shirt",
                        "quantity": "5",
                        "price": "3",
                        "tax": "0.01",
                        "sku": "1",
                        "currency": "USD"
                    },
                    {
                        "name": "mesh",
                        "description": "80s Mesh Sleeveless Shirt",
                        "quantity": "1",
                        "price": "17",
                        "tax": "0.02",
                        "sku": "product34",
                        "currency": "USD"
                    },
                    {
                        "name": "discount",
                        "quantity": "1",
                        "price": "-2.00",
                        "sku": "product",
                        "currency": "USD"
                    }
                ],
                "shipping_address": {
                    "recipient_name": "Betsy Buyer",
                    "line1": "111 First Street",
                    "city": "Saratoga",
                    "country_code": "US",
                    "postal_code": "95070",
                    "state": "CA"
                }
            }
        }
    ]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});
