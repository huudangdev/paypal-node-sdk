/* Copyright 2013 PayPal */
"use strict";

var paypal_sdk = require('../');
var openid_connect = paypal_sdk.openid_connect;

//set configs for openid_client_id and openid_client_secret if they are different from your
//usual client_id and secret. openid_redirect_uri is required
paypal_sdk.configure({
    'mode': 'sandbox',
    'openid_client_id': 'CLIENT_ID',
    'openid_client_secret': 'CLIENT_SECRET',
    'openid_redirect_uri': 'http://example.com'
});

// Login url
console.log(openid_connect.authorize_url({'scope': 'openid profile'}));

// With Authorizatiion code
openid_connect.tokeninfo.create("Replace with authorize code", function (error, tokeninfo) {
    if (error) {
        console.log(error);
    } else {
        openid_connect.userinfo.get(tokeninfo.access_token, function (error, userinfo) {
            if (error) {
                console.log(error);
            } else {
                console.log(tokeninfo);
                console.log(userinfo);
                // Logout url
                console.log(openid_connect.logout_url({ 'id_token': tokeninfo.id_token }));
            }
        });
    }
});

// With Refresh token
openid_connect.tokeninfo.refresh("Replace with refresh_token", function (error, tokeninfo) {
    if (error) {
        console.log(error);
    } else {
        openid_connect.userinfo.get(tokeninfo.access_token, function (error, userinfo) {
            if (error) {
                console.log(error);
            } else {
                console.log(tokeninfo);
                console.log(userinfo);
            }
        });
    }
});

