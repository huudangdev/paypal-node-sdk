rest-api-sdk-nodejs
===================

Before executing run the following

```sh
npm install ../
```

to run samples 

```sh
node <sample file name>
ex: node credit-card-payment.js
```
Samples
-------------------

  * credit-card-payment.js - make payement with a CreditCard
  * get-credit-card - get creditcard details associated with a CreditCardID(ID got from save-credit-card)
  * get-payment - get payment details
  * get-sale-details.js - get sale details
  * list-payments.js - list all the payments associated with this emailId
  * payment-with-paypal.js - make payment using PayPal
  * pay-with-saved-card.js - pay with saved credit card (using CreditCard ID got from save-credit-card)
  * sale-refund.js - refund the sale transaction
  * save-credit-card.js - save CreditCard and get CrediCardId that can be used to make payments using pay-with-saved-card
