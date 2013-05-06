# REST API SDK for Node.js [![NPM version](https://badge.fury.io/js/paypal-rest-sdk.png)](http://badge.fury.io/js/paypal-rest-sdk) [![Build Status](https://travis-ci.org/paypal/rest-api-sdk-nodejs.png?branch=master)](https://travis-ci.org/paypal/rest-api-sdk-nodejs)

Repository for PayPal's Node.js SDK (node.js version >=0.6.x) and Node.js samples for REST API. Refer [Node.js Sample Reference App ](https://github.com/paypal/rest-api-sample-app-nodejs) for a sample web app implementing the REST APIs.

## Usage
To write an app using the SDK

  * Register for a developer account and get your client_id and secret at [PayPal Developer Portal](https://developer.paypal.com).
  * Add dependency 'paypal-rest-sdk' in your package.json file.
  * Require 'paypal-rest-sdk' in your file

  ```js
  var paypal_sdk = require('paypal-rest-sdk');
  ```
  * Create config options, with required parameters (host, port, client_id, secret).

  ```js
  var config_options = {
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
    'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
  };
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

  paypal_sdk.credit_card.create(card_data, config_options, function(err , res){
    if (err) {
      console.log(err);
      throw err;
    }
    if (res) {
      console.log("Create Credit-Card Response");
      console.log(res);
    }
  })
  ```

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
mocha -t 15000 #(timeout is specified in milliseconds eg: 15000ms)
```
## Reference
   [REST API Reference] (https://developer.paypal.com/webapps/developer/docs/api/)

## Contribution
   * If you would like to contribute, please fork the repo and send in a pull request.
   * Please ensure you run grunt before sending in the pull request.

