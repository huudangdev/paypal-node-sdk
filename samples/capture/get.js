var paypal_sdk = require('../../');
require('../configure');

paypal_sdk.capture.get("8F148933LY9388354", function(error, capture){
  if(error){
    console.error(error);
  } else {
    console.log(capture);
  }
});
