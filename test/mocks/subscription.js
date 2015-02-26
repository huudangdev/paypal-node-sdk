var nock = require('nock');

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015FCC322yoZ8Rjb74XpLS7wgWCkPpBZ0fiA9suvclx6kE","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': '4f9c1f2c0d206',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=126527&TopLevelTxnStartTime=1472080abf4&Host=slcsbidensectoken502.slc.paypal.com&pid=29059',
  date: 'Thu, 10 Jul 2014 13:40:09 GMT',
  'content-type': 'application/json',
  'content-length': '374' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-12U98928TT9129128ECALAJY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-3EC60609HF4313133ECALAJY","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-3WR87858RT4036731ECALAJY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-7XR090190M4848722ECALAJY","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-8NT01713C33262114ECALAJY","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-0XR31434AS9044537ECALAJY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-30159882YH277305AECALAJY","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:10.407Z","update_time":"2014-07-10T13:40:10.407Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': '8bb21ab20d65b',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=23732&TopLevelTxnStartTime=1472080b01b&Host=slcsbjm2.slc.paypal.com&pid=31339',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:09 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY')
  .reply(200, {"id":"P-12U98928TT9129128ECALAJY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-3EC60609HF4313133ECALAJY","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-7XR090190M4848722ECALAJY","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-3WR87858RT4036731ECALAJY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-8NT01713C33262114ECALAJY","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-30159882YH277305AECALAJY","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-0XR31434AS9044537ECALAJY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:10.407Z","update_time":"2014-07-10T13:40:10.407Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=298',
  'paypal-debug-id': '30395cb803536',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=21897&TopLevelTxnStartTime=1472080b197&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:10 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans/ABRACADABRA')
  .reply(404, {"name":"TEMPLATE_ID_INVALID","details":[{"field":"template id is invalid","issue":"Incorrect Template Id."}],"message":"","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#TEMPLATE_ID_INVALID","debug_id":"64084bed036a4"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=300',
  'paypal-debug-id': '64084bed036a4',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80830&TopLevelTxnStartTime=1472080b2cb&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:10 GMT',
  'content-type': 'application/json',
  'content-length': '248' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans')
  .reply(200, {"plans":[{"id":"P-56K14732FM7771214EBTVYEI","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:12:30.481Z","update_time":"2014-07-10T13:12:30.775Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-56K14732FM7771214EBTVYEI","rel":"self","method":"GET"}]},{"id":"P-15J12908FF236313XEBTVINI","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:12:28.469Z","update_time":"2014-07-10T13:12:28.469Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-15J12908FF236313XEBTVINI","rel":"self","method":"GET"}]},{"id":"P-87R70106FP259230TEBTNNYY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:11:56.387Z","update_time":"2014-07-10T13:11:56.677Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-87R70106FP259230TEBTNNYY","rel":"self","method":"GET"}]},{"id":"P-03K35470P3291683VEBTM5HY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:11:54.271Z","update_time":"2014-07-10T13:11:54.271Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-03K35470P3291683VEBTM5HY","rel":"self","method":"GET"}]},{"id":"P-7M166512GD050554NEBTER7I","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:11:20.061Z","update_time":"2014-07-10T13:11:20.340Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-7M166512GD050554NEBTER7I","rel":"self","method":"GET"}]},{"id":"P-0HL51828N76948921EBTECDY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:11:18.031Z","update_time":"2014-07-10T13:11:18.031Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-0HL51828N76948921EBTECDY","rel":"self","method":"GET"}]},{"id":"P-12U98928TT9129128ECALAJY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:40:10.407Z","update_time":"2014-07-10T13:40:10.407Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY","rel":"self","method":"GET"}]},{"id":"P-9X3132019F202640KEBSJMSA","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:09:28.776Z","update_time":"2014-07-10T13:09:28.776Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-9X3132019F202640KEBSJMSA","rel":"self","method":"GET"}]},{"id":"P-7WA212708X5761403C3Y5KKA","state":"CREATED","name":"Small organization plan","description":"5000 dollars, bi weekly for 10 periods","type":"FIXED","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-08T17:07:33.288Z","update_time":"2014-07-08T17:07:33.288Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-7WA212708X5761403C3Y5KKA","rel":"self","method":"GET"}]},{"id":"P-17E58005VN572770CEBSJ4ZI","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"create_time":"2014-07-10T13:09:30.853Z","update_time":"2014-07-10T13:09:31.138Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-17E58005VN572770CEBSJ4ZI","rel":"self","method":"GET"}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans?start_id=10&sort_order=desc&status=CREATED","rel":"next_page","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'b44d581f0ca46',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=1472080b424&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:10 GMT',
  'content-type': 'application/json',
  'content-length': '4183' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-8LD263969Y859015PECALKYQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-2XN9272442074115HECALKYQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-18E70525LR7147727ECALKYQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-2WN159468S510294RECALKYQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-35S79259W9890913DECALKYQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-1JG92077V7533574MECALKYY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-6KA376884M441091UECALKYY","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:11.746Z","update_time":"2014-07-10T13:40:11.746Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-8LD263969Y859015PECALKYQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=300',
  'paypal-debug-id': 'd57d141103134',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80830&TopLevelTxnStartTime=1472080b557&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:11 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-8LD263969Y859015PECALKYQ', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': '92812b350cfa8',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=22099&TopLevelTxnStartTime=1472080b691&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:12 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans/P-8LD263969Y859015PECALKYQ')
  .reply(200, {"id":"P-8LD263969Y859015PECALKYQ","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-2XN9272442074115HECALKYQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-2WN159468S510294RECALKYQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-18E70525LR7147727ECALKYQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-35S79259W9890913DECALKYQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-6KA376884M441091UECALKYY","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-1JG92077V7533574MECALKYY","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:11.746Z","update_time":"2014-07-10T13:40:12.077Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-8LD263969Y859015PECALKYQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'c6aecf3c0ce60',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=1472080b7ee&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:12 GMT',
  'content-type': 'application/json',
  'content-length': '1414' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-4L7057750C0051713ECALSNQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-3GD42119BU321004VECALSNQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-8CV96058SG380880YECALSNQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-4WY78494MD5274004ECALSNQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-7AW81949XG794561WECALSNQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-5TW28694V4632832EECALSNQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-3SA704469D752342WECALSNQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:12.726Z","update_time":"2014-07-10T13:40:12.726Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-4L7057750C0051713ECALSNQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13627',
  'paypal-debug-id': 'e3c69fd703cd7',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80830&TopLevelTxnStartTime=1472080b92b&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:11 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-4L7057750C0051713ECALSNQ', [{"op":"replace","path":"/merchant-preferences","value":{"cancel_url":"http://www.paypal123.com","setup_fee":{"value":"22","currency":"USD"}}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13627',
  'paypal-debug-id': '51938bb403e13',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80830&TopLevelTxnStartTime=1472080ba67&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:13 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans/P-4L7057750C0051713ECALSNQ')
  .reply(200, {"id":"P-4L7057750C0051713ECALSNQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-3GD42119BU321004VECALSNQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-4WY78494MD5274004ECALSNQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-8CV96058SG380880YECALSNQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-7AW81949XG794561WECALSNQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-3SA704469D752342WECALSNQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-5TW28694V4632832EECALSNQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"22"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.paypal123.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:12.726Z","update_time":"2014-07-10T13:40:13.060Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-4L7057750C0051713ECALSNQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=3284',
  'paypal-debug-id': '34e25d470c179',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80971&TopLevelTxnStartTime=1472080bbe1&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:13 GMT',
  'content-type': 'application/json',
  'content-length': '1418' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-8M239038M4250351NECAMIPI"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-8M239038M4250351NECAMIPI","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-6NM64917YN7765425ECAMIPI","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-0KE608780B2534216ECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-5LV43906LJ307104DECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-6C822850FP2569353ECAMIPI","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-2B6251795H312091PECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-7HY62822F8753893WECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-28Y23504JA4250117","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-28Y23504JA4250117/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=10599',
  'paypal-debug-id': '2c4c1b090bc6d',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=212&TopLevelTxnStartTime=1472080c6a4&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:15 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-agreements/I-08413VDRU6DE', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-8M239038M4250351NECAMIPI"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-8M239038M4250351NECAMIPI","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-6NM64917YN7765425ECAMIPI","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-0KE608780B2534216ECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-5LV43906LJ307104DECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-6C822850FP2569353ECAMIPI","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-2B6251795H312091PECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-7HY62822F8753893WECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-28Y23504JA4250117","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-28Y23504JA4250117/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=10599',
  'paypal-debug-id': '2c4c1b090bc6d',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=212&TopLevelTxnStartTime=1472080c6a4&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:15 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015g1XmdAx6jM8lR6WXR9yNqf2gCMGpkbvyyBfOPQqjT.s","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13638',
  'paypal-debug-id': '962b7888216b7',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=126527&TopLevelTxnStartTime=1472112bcac&Host=slcsbidensectoken502.slc.paypal.com&pid=29059',
  date: 'Thu, 10 Jul 2014 16:19:42 GMT',
  'content-type': 'application/json',
  'content-length': '374' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-agreements/I-W0CR3PB7KTBB', [{"op":"replace","path":"/","value":{"description":"New Description","name":"New Name","shipping_address":{"line1":"StayBridge Suites","line2":"Crook Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13638',
  'paypal-debug-id': '4c2bc228214ef',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=21897&TopLevelTxnStartTime=1472112bf37&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 16:19:43 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-agreements/I-W0CR3PB7KTBB')
  .reply(200, {"id":"I-W0CR3PB7KTBB","state":"Active","description":"New Description","plan":{"payment_definitions":[{"type":"REGULAR","frequency":"Week","amount":{"currency":"USD","value":"250.00"},"charge_models":[{"type":"TAX","amount":{"currency":"USD","value":"5.00"}},{"type":"SHIPPING","amount":{"currency":"USD","value":"25.00"}}],"cycles":"10","frequency_interval":"2"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25.00"},"max_fail_attempts":"1","auto_bill_amount":"YES"}},"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-W0CR3PB7KTBB/suspend","rel":"suspend","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-W0CR3PB7KTBB/re-activate","rel":"re_activate","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-W0CR3PB7KTBB/cancel","rel":"cancel","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-W0CR3PB7KTBB/bill-balance","rel":"self","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-W0CR3PB7KTBB/set-balance","rel":"self","method":"POST"}],"start_date":"2015-02-18T23:00:00Z","agreement_details":{"outstanding_balance":{"currency":"USD","value":"0.00"},"cycles_remaining":"10","cycles_completed":"0","next_billing_date":"2015-02-19T10:00:00Z","last_payment_date":"2014-07-08T02:01:02Z","last_payment_amount":{"currency":"USD","value":"25.00"},"final_payment_date":"2015-06-25T10:00:00Z","failed_payment_count":"0"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=13943',
  'paypal-debug-id': 'f8a239ee25af5',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=80830&TopLevelTxnStartTime=1472112c35b&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 16:19:43 GMT',
  'content-type': 'application/json',
  'content-length': '1522' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/transactions?start_date=2014-07-01&end_date=2014-07-20')
  .reply(200, {"agreement_transaction_list":[{"transaction_id":"I-W0CR3PB7KTBB","status":"Created","transaction_type":"Recurring Payment","payer_email":"","payer_name":"John  Smith","time_stamp":"2014-07-07T22:16:19Z","time_zone":"GMT"},{"transaction_id":"6D127165PP237693N","status":"Unclaimed","transaction_type":"Recurring Payment","amount":{"currency":"USD","value":"25.00"},"fee_amount":{"currency":"USD","value":"0.00"},"net_amount":{"currency":"USD","value":"25.00"},"payer_email":"android_test1@gmail.com","payer_name":"John  Smith","time_stamp":"2014-07-08T02:01:02Z","time_zone":"GMT"},{"transaction_id":"I-W0CR3PB7KTBB","status":"Updated","transaction_type":"Recurring Payment","payer_email":"","payer_name":"John  Smith","time_stamp":"2014-07-10T16:17:43Z","time_zone":"GMT"},{"transaction_id":"I-W0CR3PB7KTBB","status":"Updated","transaction_type":"Recurring Payment","payer_email":"","payer_name":"John  Smith","time_stamp":"2014-07-10T16:17:44Z","time_zone":"GMT"},{"transaction_id":"I-W0CR3PB7KTBB","status":"Updated","transaction_type":"Recurring Payment","payer_email":"","payer_name":"John  Smith","time_stamp":"2014-07-10T16:19:42Z","time_zone":"GMT"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=13943',
  'paypal-debug-id': '3f07358025e08',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=80830&TopLevelTxnStartTime=1472112c646&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 16:19:43 GMT',
  'content-type': 'application/json',
  'content-length': '1159' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/suspend', {"note": "Suspending the agreement"})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=250',
  'paypal-debug-id': '266f94b67502a',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=23732&TopLevelTxnStartTime=14721e79b9f&Host=slcsbjm2.slc.paypal.com&pid=31339',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 20:12:13 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/re-activate', {"note": "Reactivating the agreement"})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=10186',
  'paypal-debug-id': '1ae0bc788fc79',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=128&TopLevelTxnStartTime=1472208339f&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 20:47:48 GMT' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/set-balance', {"value":"100000","currency":"USD"})
  .reply(400, {"name":"RP_CANT_INCREASE_OUTSTANDING_AMOUNT","message":"Cannot increase delinquent amount","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#RP_CANT_INCREASE_OUTSTANDING_AMOUNT","debug_id":"1ba1f49a14f8f"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=230',
  'paypal-debug-id': '1ba1f49a14f8f',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=128&TopLevelTxnStartTime=1473bb57f0b&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Tue, 15 Jul 2014 20:27:36 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '233' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/bill-balance', {"note":"Billing Balance Amount","amount":{"value":"100000","currency":"USD"}})
  .reply(400, {"name":"RP_CANT_INCREASE_OUTSTANDING_AMOUNT","message":"Cannot increase delinquent amount","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#RP_CANT_INCREASE_OUTSTANDING_AMOUNT","debug_id":"1ba1f49a14f8f"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=230',
  'paypal-debug-id': '1ba1f49a14f8f',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=128&TopLevelTxnStartTime=1473bb57f0b&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Tue, 15 Jul 2014 20:27:36 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '233' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/cancel', {"note":"Canceling the agreement"})
  .reply(400, {"name":"RP_INVALID_STATUS_TO_CANCEL","message":"Invalid profile status for cancel action; profile should be active or suspended","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#RP_INVALID_STATUS_TO_CANCEL","debug_id":"0cc67ff0854e1"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=10318',
  'paypal-debug-id': '0cc67ff0854e1',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=21897&TopLevelTxnStartTime=1473bcc55ed&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Tue, 15 Jul 2014 20:52:33 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '263' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015TOikaSAG2tvAkkM7rvXCpqBGTTluB6VW8CLK3eT1z.Y","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=639',
  'paypal-debug-id': '401f7af7d7538',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=110132&TopLevelTxnStartTime=147c5dc23ab&Host=slcsbidensectoken501.slc.paypal.com&pid=22315',
  date: 'Mon, 11 Aug 2014 16:17:24 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-plans/')
  .reply(200, {"plans":[{"id":"P-34V59229UL954830EYXKJF4I","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:09:08.593Z","update_time":"2014-08-11T16:09:08.958Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-34V59229UL954830EYXKJF4I","rel":"self","method":"GET"}]},{"id":"P-4XP29582NC800543RYXI2XJY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:05:58.311Z","update_time":"2014-08-11T16:05:58.729Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-4XP29582NC800543RYXI2XJY","rel":"self","method":"GET"}]},{"id":"P-7FD869627R7043411YXI2B4Q","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:05:55.570Z","update_time":"2014-08-11T16:05:55.570Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-7FD869627R7043411YXI2B4Q","rel":"self","method":"GET"}]},{"id":"P-46B05733GH4099315YXKIORA","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:09:05.604Z","update_time":"2014-08-11T16:09:05.604Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-46B05733GH4099315YXKIORA","rel":"self","method":"GET"}]},{"id":"P-9DU94426GV805500CYXKGBSQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:08:55.754Z","update_time":"2014-08-11T16:08:56.201Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-9DU94426GV805500CYXKGBSQ","rel":"self","method":"GET"}]},{"id":"P-3YX08908NA1864306YXKFNEY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:08:53.139Z","update_time":"2014-08-11T16:08:53.139Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-3YX08908NA1864306YXKFNEY","rel":"self","method":"GET"}]},{"id":"P-79X994065H022400UYXG7AZY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:01:53.767Z","update_time":"2014-08-11T16:01:53.767Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-79X994065H022400UYXG7AZY","rel":"self","method":"GET"}]},{"id":"P-7EF215887M9930149YXGVOMI","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-08-11T16:01:14.545Z","update_time":"2014-08-11T16:01:14.545Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-7EF215887M9930149YXGVOMI","rel":"self","method":"GET"}]},{"id":"P-21N628416B8110911P3FSO7Y","state":"CREATED","name":"Fast Speed Plan","description":"Template creation.","type":"FIXED","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-07-28T21:05:48.927Z","update_time":"2014-07-28T21:05:48.927Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-21N628416B8110911P3FSO7Y","rel":"self","method":"GET"}]},{"id":"P-1AT403021N970710FPXQB5MI","state":"CREATED","name":"Subscripcion Talenteca","description":"Plan $5","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"create_time":"2014-07-28T16:49:05.713Z","update_time":"2014-07-28T16:49:05.713Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-1AT403021N970710FPXQB5MI","rel":"self","method":"GET"}]}],"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans?start_id=10&sort_order=desc&status=CREATED","rel":"next_page","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=257',
  'paypal-debug-id': '59325d0cd7093',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=220&TopLevelTxnStartTime=147c5dc26b2&Host=slcsbjm2.slc.paypal.com&pid=24461',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:25 GMT',
  'content-type': 'application/json',
  'content-length': '4144' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-8RN28686DX2447226YXOCQPA","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"payment_definitions":[{"id":"PD-6S134798810345216YXOCQPA","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-7ED85515KW9632114YXOCQPA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-58K605838J404932RYXOCQPA","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-9A281465YY645345SYXOCQPA","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-8X137950HG8969218YXOCQPA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-0PV98717RX3435728YXOCQPA","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-08-11T16:17:25.564Z","update_time":"2014-08-11T16:17:25.564Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-8RN28686DX2447226YXOCQPA","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=2815',
  'paypal-debug-id': '5f4ff15ad7bed',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=7966&TopLevelTxnStartTime=147c5dc2833&Host=slcsbjm1.slc.paypal.com&pid=25458',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:25 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-8RN28686DX2447226YXOCQPA', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=2815',
  'paypal-debug-id': '54a9e321d756e',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=7966&TopLevelTxnStartTime=147c5dc29a4&Host=slcsbjm1.slc.paypal.com&pid=25458',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:25 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-8RN28686DX2447226YXOCQPA"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-8RN28686DX2447226YXOCQPA","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-6S134798810345216YXOCQPA","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-58K605838J404932RYXOCQPA","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-7ED85515KW9632114YXOCQPA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-9A281465YY645345SYXOCQPA","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-0PV98717RX3435728YXOCQPA","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-8X137950HG8969218YXOCQPA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-1JP53346D4431103E","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-1JP53346D4431103E/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=257',
  'paypal-debug-id': '4f62899ad7dd1',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=220&TopLevelTxnStartTime=147c5dc2b58&Host=slcsbjm2.slc.paypal.com&pid=24461',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:26 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-12U98928TT9129128ECALAJY","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"payment_definitions":[{"id":"PD-0VB4874704910640UYXOC22I","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-4T449364A7110960BYXOC22I","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-9A1643315A796235MYXOC22I","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-34V59229UL954830EYXOC22I","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-1CV30467J35870724YXOC22I","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-98V22997D41653214YXOC22I","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-08-11T16:17:26.889Z","update_time":"2014-08-11T16:17:26.889Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-08H37843WE776384TYXOC22I","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
  'paypal-debug-id': '2716a0a9d7a66',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=210&TopLevelTxnStartTime=147c5dc2d60&Host=slcsbjm2.slc.paypal.com&pid=24461',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:26 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=639',
  'paypal-debug-id': '1597abbfd7804',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=210&TopLevelTxnStartTime=147c5dc2ef3&Host=slcsbjm2.slc.paypal.com&pid=24461',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:26 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-12U98928TT9129128ECALAJY"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-12U98928TT9129128ECALAJY","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-0VB4874704910640UYXOC22I","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-9A1643315A796235MYXOC22I","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-4T449364A7110960BYXOC22I","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-34V59229UL954830EYXOC22I","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-98V22997D41653214YXOC22I","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-1CV30467J35870724YXOC22I","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-6FE36949NK258512F","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-6FE36949NK258512F/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=242',
  'paypal-debug-id': '3803750cd6691',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=220&TopLevelTxnStartTime=147c5dc3099&Host=slcsbjm2.slc.paypal.com&pid=24461',
  'content-language': '*',
  date: 'Mon, 11 Aug 2014 16:17:27 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card","access_token":"A015cKS4U4O-7yynj88TgaVU.PvbZpuRw4RmJel.8EMl.00","token_type":"Bearer","app_id":"APP-2EJ531395M785864S","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=277',
  'paypal-debug-id': 'bbb8db7eb6b43',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=91&TopLevelTxnStartTime=147e918739e&Host=slcsbidensectoken502.slc.paypal.com&pid=26972',
  date: 'Mon, 18 Aug 2014 12:29:59 GMT',
  'content-type': 'application/json',
  'content-length': '367' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-2JX43094YJ325493D5EMHPFA","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"payment_definitions":[{"id":"PD-2JB11561WN52082435EMHPFA","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-9ST90597AK298231L5EMHPFA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-7EF215887M99301495EMHPFA","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-1F332767PF152024C5EMHPFA","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-79X994065H022400U5EMHPFA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-3YX08908NA18643065EMHPFA","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-08-18T12:30:00.596Z","update_time":"2014-08-18T12:30:00.596Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-2JX43094YJ325493D5EMHPFA","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=1976',
  'paypal-debug-id': '7c0a4f96b6424',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=147e918778b&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:00 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-12U98928TT9129128ECALAJY', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=34361',
  'paypal-debug-id': 'bb692aaab5151',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=127&TopLevelTxnStartTime=147e9187a24&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:01 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-2JX43094YJ325493D5EMHPFA"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-2JX43094YJ325493D5EMHPFA","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-2JB11561WN52082435EMHPFA","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-7EF215887M99301495EMHPFA","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-9ST90597AK298231L5EMHPFA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-1F332767PF152024C5EMHPFA","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-3YX08908NA18643065EMHPFA","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-79X994065H022400U5EMHPFA","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-3K160249197154100","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-3K160249197154100/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=262',
  'paypal-debug-id': 'aafd619eb735e',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=305&TopLevelTxnStartTime=147e9187ca7&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:02 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-1YX0764912529121J5EMIBEQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"1861094158886678455"},"payment_definitions":[{"id":"PD-1CY27554T0541600R5EMIBEQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-9DU94426GV805500C5EMIBEQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-6EN78266AM85162125EMIBEQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-382219814A915323K5EMIBEQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-9DB35333XA08089235EMIBEQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-5171350835213344L5EMIBEQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-08-18T12:30:02.898Z","update_time":"2014-08-18T12:30:02.898Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-1YX0764912529121J5EMIBEQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=36148',
  'paypal-debug-id': '5647c37db935f',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=147e918808a&Host=slcsbjm3.slc.paypal.com&pid=25126',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:02 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-1YX0764912529121J5EMIBEQ', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=262',
  'paypal-debug-id': '1187c8bab8de0',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=305&TopLevelTxnStartTime=147e91882b9&Host=slcsbjm2.slc.paypal.com&pid=26669',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:03 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements/', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-1YX0764912529121J5EMIBEQ"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-1YX0764912529121J5EMIBEQ","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-1CY27554T0541600R5EMIBEQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-6EN78266AM85162125EMIBEQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-9DU94426GV805500C5EMIBEQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-382219814A915323K5EMIBEQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-5171350835213344L5EMIBEQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-9DB35333XA08089235EMIBEQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-6UH98669FM090953K","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-6UH98669FM090953K/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=34361',
  'paypal-debug-id': 'fc1ead0fbac48',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=213&TopLevelTxnStartTime=147e918851d&Host=slcsbjm1.slc.paypal.com&pid=25157',
  'content-language': '*',
  date: 'Mon, 18 Aug 2014 12:30:04 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });
