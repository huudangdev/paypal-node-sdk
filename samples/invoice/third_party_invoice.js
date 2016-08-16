/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

// Using Log In with PayPal, third party merchants can authorize your application to create and submit invoices on their behalf.
// See https://developer.paypal.com/docs/integration/direct/identity/log-in-with-paypal/ for more details about Log In with PayPal.

var paypal = require('../../');
paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS',
    'client_secret': 'EGnHDxD_qRPdaLdZz8iCr8N7_MzF-YHPTkjs6NKYQvQSBngp4PTTVWkPZRbL',

    // You need to configure the OpenID client ID and secret, which should be the same as your normal client ID and secret.
    'openid_client_id': 'AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS',
    'openid_secret': 'EGnHDxD_qRPdaLdZz8iCr8N7_MzF-YHPTkjs6NKYQvQSBngp4PTTVWkPZRbL',

    // Your OpenID redirect URI must be the same value as your app's return URL. It is configured in the PayPal Developer Dashboard ( https://developer.paypal.com/developer/applications/ ).
    'openid_redirect_uri': 'http://localhost/paypal/PayPal-PHP-SDK/sample/lipp/UserConsentRedirect.php?success=true'
});

// Step 1. Generate a Log In with PayPal authorization URL. The third party merchant will need to visit this URL and authorize your request. You should use the `openid`, `https://uri.paypal.com/services/invoicing`, and `email` scopes at the minimum.
// console.log(openIdConnect.authorizeUrl({'scope': 'openid https://uri.paypal.com/services/invoicing email'}));

// For example, the URL to redirect the third party merchant may be like:
// https://www.sandbox.paypal.com/signin/authorize?client_id=AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS&scope=openid%20https%3A%2F%2Furi.paypal.com%2Fservices%2Finvoicing%20email&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Fpaypal%2FPayPal-PHP-SDK%2Fsample%2Flipp%2FUserConsentRedirect.php%3Fsuccess%3Dtrue

// Step 2. After the third party merchant authorizes your request, Log In with PayPal will redirect the browser to your configured openid_redirect_uri with an authorization code query parameter value.

// For example, after the merchant successfully authorizes your request, they will be redirected to the merchant's website configured via `openid_redirect_uri` like:
// http://localhost/paypal/PayPal-PHP-SDK/sample/lipp/UserConsentRedirect.php?success=true&scope=https%3A%2F%2Furi.paypal.com%2Fservices%2Finvoicing+openid+email&code=q6DV3YTMUDquwMQ88I7VyE_Ou1ksKcKVo1b_a8zqUQ7fGCxLoLajHIBROQ5yxcM0dNWVWPQaovH35dJmdmunNYrNKao8UlpY5LVMuTgnxZ6ce6UL3XuEd3JXuuPtdg-4feXyMA25oh2aM5o5HTtSeSG1Ag596q9tk90dfJQ8gxhFTw1bV

// Step 3. Your web app should parse the query parameters for the authorization `code` value. You should use the `code` value to get a refresh token and securely save it for later use.
/*
openIdConnect.tokeninfo.create("q6DV3YTMUDquwMQ88I7VyE_Ou1ksKcKVo1b_a8zqUQ7fGCxLoLajHIBROQ5yxcM0dNWVWPQaovH35dJmdmunNYrNKao8UlpY5LVMuTgnxZ6ce6UL3XuEd3JXuuPtdg-4feXyMA25oh2aM5o5HTtSeSG1Ag596q9tk90dfJQ8gxhFTw1bV", function (error, tokeninfo) {
    console.log(tokeninfo);
    //
    // tokeninfo = {
    //     token_type: 'Bearer',
    //     expires_in: '28800',
    //     refresh_token: 'J5yFACP3Y5dqdWCdN3o9lNYz0XyR01IHNMQn-E4r6Ss38rqbQ1C4rC6PSBhJvB_tte4WZsWe8ealMl-U_GMSz30dIkKaovgN41Xf8Sz0EGU55da6tST5I6sg3Rw',
    //     id_token: '<some value>',
    //     access_token: '<some value>',
    //     httpStatusCode: 200
    // };
});
*/

// Step 4. You can use the refresh token to get the third party merchant's email address to use in the invoice, and then you can create an invoice on behalf of the third party merchant.

var refresh_token = 'J5yFACP3Y5dqdWCdN3o9lNYz0XyR01IHNMQn-E4r6Ss38rqbQ1C4rC6PSBhJvB_tte4WZsWe8ealMl-U_GMSz30dIkKaovgN41Xf8Sz0EGU55da6tST5I6sg3Rw';

paypal.openIdConnect.tokeninfo.refresh(refresh_token, function (error, tokeninfo) {
    if (error) {
        console.log(error);
    } else {
        paypal.openIdConnect.userinfo.get(tokeninfo.access_token, function (error, userinfo) {
            if (error) {
                console.log(error);
            } else {
                var create_invoice_json = {
                    "merchant_info": {
                        // You should use the email returned from the userinfo to match the third party's email address.
                        "email": userinfo.email,
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
                        "quantity": 100.0,
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

                var third_party_config = {'refresh_token': refresh_token};

                paypal.invoice.create(create_invoice_json, third_party_config, function (error, invoice) {
                    if (error) {
                        throw error;
                    } else {
                        console.log("Create Invoice Response");
                        console.log(invoice);
                    }
                });
            }
        });
    }
});
