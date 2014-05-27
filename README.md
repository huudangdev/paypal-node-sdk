# REST API SDK for Node.js

Continuous integration status:

[![Build Status](https://travis-ci.org/paypal/rest-api-sdk-nodejs.png?branch=master)](https://travis-ci.org/paypal/rest-api-sdk-nodejs) [![Coverage Status](https://coveralls.io/repos/paypal/rest-api-sdk-nodejs/badge.png?branch=master)](https://coveralls.io/r/paypal/rest-api-sdk-nodejs?branch=master) 

NPM status:

[![NPM version](https://badge.fury.io/js/paypal-rest-sdk.png)](http://badge.fury.io/js/paypal-rest-sdk)
[![Dependency Status](https://david-dm.org/paypal/rest-api-sdk-nodejs.png)](https://david-dm.org/paypal/rest-api-sdk-nodejs)

Repository for PayPal's Node SDK (node.js version >=0.6.x) and Node samples for REST API. Refer [Node.js Sample Reference App ](https://github.com/paypal/rest-api-sample-app-nodejs) for a sample web app implementing the REST APIs.

## Usage
To write an app using the SDK

  * Register for a developer account and get your client_id and secret at [PayPal Developer Portal](https://developer.paypal.com).
  * Add dependency 'paypal-rest-sdk' in your package.json file.
  * Require 'paypal-rest-sdk' in your file

    ```js
    var paypal_sdk = require('paypal-rest-sdk');
    ```
  * Create config options, with parameters (mode, client_id, secret).

    ```js
    paypal_sdk.configure({
      'mode': 'sandbox', //sandbox or live
      'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
      'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
    });
    ```
  * Invoke the rest api (eg: store a credit card) with required parameters (eg: data, config_options, callback).

    ```js
    var card_data = {
      "type": "visa",
      "number": "4417119669820331",
      "expire_month": "11",
      "expire_year": "2018",
      "cvv2": "123",
      "first_name": "Joe",
      "last_name": "Shopper"
    };

    paypal_sdk.credit_card.create(card_data, function(error, credit_card){
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log("Create Credit-Card Response");
        console.log(credit_card);
      }
    })
    ```

  * To use OpenID Connect

    ```js
    // OpenID configuration
    paypal_sdk.configure({
      'openid_client_id': 'CLIENT_ID',
      'openid_client_secret': 'CLIENT_SECRET',
      'openid_redirect_uri': 'http://example.com' });

    // Authorize url
    paypal_sdk.openid_connect.authorize_url({'scope': 'openid profile'});

    // Get tokeninfo with Authorize code
    paypal_sdk.openid_connect.tokeninfo.create("Replace with authorize code", function(error, tokeninfo){
      console.log(tokeninfo);
    });

    // Get tokeninfo with Refresh code
    paypal_sdk.openid_connect.tokeninfo.refresh("Replace with refresh_token", function(error, tokeninfo){
      console.log(tokeninfo);
    });

    // Get userinfo with Access code
    paypal_sdk.openid_connect.userinfo.get("Replace with access_code", function(error, userinfo){
      console.log(userinfo);
    });

    // Logout url
    paypal_sdk.openid_connect.logout_url("Replace with tokeninfo.id_token");
    ```
  * To create [Future Payments](https://developer.paypal.com/docs/integration/mobile/make-future-payment/), check out this [sample](/samples/payment/create_future_payment.js) for executing future payments for a customer who has granted consent on a mobile device.

  * For [Invoicing](https://developer.paypal.com/webapps/developer/docs/api/#invoicing), check out the [samples](/samples/invoice/) to see how you can use the node sdk to create, send and manage invoices.

## Running Samples
Instructions for running samples are located in the [sample directory] (https://github.com/Runnable/rest-api-sdk-nodejs/tree/master/samples). Try these samples in a live sandbox environment:

<a href="https://runnable.com/paypal" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>

## Running Tests
To run the test suite first invoke the following command within the repo

If mocha is not installed
```sh
npm install -g mocha
```
and then to install the development dependencies:
```sh
npm install
```
then run the tests:
```sh
grunt test (timeout is specified in milliseconds eg: 15000ms)
```

## Debugging

   * It is recommended to provide Paypal-Debug-Id if requesting PayPal Merchant Technical Services for support. You can get access to the debug id by setting environment variable NODE_ENV=development
   * The error object returned for any bad request has error.response populated with [details](https://developer.paypal.com/webapps/developer/docs/api/#errors)

## Reference
   [REST API Reference] (https://developer.paypal.com/webapps/developer/docs/api/)

## Contribution
   * If you would like to contribute, please fork the repo and send in a pull request.
   * Please ensure you run grunt before sending in the pull request.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/paypal/rest-api-sdk-nodejs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
