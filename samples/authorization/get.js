var paypal_sdk = require('../../');
require('../configure');

paypal_sdk.authorization.get("99M58264FG144833V", function(error, authorization){
    if(error){
        console.error(error);
    } else {
        console.log(authorization);
    }
});
