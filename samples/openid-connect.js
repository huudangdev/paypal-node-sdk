/* Copyright 2014 PayPal */
"use strict";

var paypal = require('../');
var openid_connect = paypal.openIdConnect;

//set configs for openid_client_id and openid_client_secret if they are different from your
//usual client_id and secret. openid_redirect_uri is required
paypal.configure({
    'mode': 'sandbox',
    'openid_client_id': 'CLIENT_ID',
    'openid_client_secret': 'CLIENT_SECRET',
    'openid_redirect_uri': 'http://example.com'
});

// Login url
console.log(openid_connect.authorizeUrl({'scope': 'openid profile'}));

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
                console.log(openid_connect.logoutUrl({ 'id_token': tokeninfo.id_token }));
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

