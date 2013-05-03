/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../');

paypal_api.configure({
  'openid_client_id': 'CLIENT_ID',
  'openid_client_secret': 'CLIENT_SECRET',
  'openid_redirect_uri': 'http://example.com'
});

// Login url
console.log(paypal_api.authorize_url({'scope': 'openid profile'}));

// With Authorizatiion code
paypal_api.tokeninfo.create("Replace with authorize code", function(error, tokeninfo){
  if (error) {
    console.log(error);
  } else {
    paypal_api.userinfo.get(tokeninfo.access_token, function(error, userinfo){
      if (error) {
        console.log(error);
      } else {
        console.log(tokeninfo);
        console.log(userinfo);
        // Logout url
        console.log(paypal_api.logout_url({ 'id_token': tokeninfo.id_token }));
      }
    });
  }
});

// With Refresh token
paypal_api.tokeninfo.refresh("Replace with refresh_token", function(error, tokeninfo){
  if (error) {
    console.log(error);
  } else {
    paypal_api.userinfo.get(tokeninfo.access_token, function(error, userinfo){
      if (error) {
        console.log(error);
      } else {
        console.log(tokeninfo);
        console.log(userinfo);
      }
    });
  }
});

