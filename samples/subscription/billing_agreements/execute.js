/* Copyright 2014 PayPal 

Execute a billing agreement after it has been created. See 
billing_agreements/create.js to see a sample for creating an 
agreement.

*/
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var paymentToken = '';

//Retrieve payment token appended as a parameter to the redirect_url specified in
//billing plan was created. It could also be saved in the user session
paymentToken = 'EC-2V0782854X675410W';

paypal_api.billing_agreement.execute(paymentToken, {}, function (error, billingAgreement) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Billing Agreement Execute Response");
        console.log(JSON.stringify(billingAgreement));
    }
});