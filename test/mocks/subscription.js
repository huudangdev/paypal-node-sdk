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
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-09547233PB351442AECAL2HQ","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-52L66166C3279024HECAL2HQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-2NE68414GA015690AECAL2HQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-00G94514XL319523UECAL2HQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-5SG99877PJ9817422ECAL2HQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-7R198667TE764594PECAL2HQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-34V40150JS539644SECAL2HQ","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:13.726Z","update_time":"2014-07-10T13:40:13.726Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-09547233PB351442AECAL2HQ","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13627',
  'paypal-debug-id': '5aee7aed038e4',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=80830&TopLevelTxnStartTime=1472080bd13&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:13 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-09547233PB351442AECAL2HQ', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=10186',
  'paypal-debug-id': '2f48e76a03bac',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=23732&TopLevelTxnStartTime=1472080bfd5&Host=slcsbjm2.slc.paypal.com&pid=31339',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:14 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-agreements', {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","start_date":"2015-02-19T00:37:04Z","plan":{"id":"P-09547233PB351442AECAL2HQ"},"payer":{"payment_method":"paypal"},"shipping_address":{"line1":"StayBr111idge Suites","line2":"Cro12ok Street","city":"San Jose","state":"CA","postal_code":"95112","country_code":"US"}})
  .reply(201, {"name":"Fast Speed Agreement","description":"Agreement for Fast Speed Plan","plan":{"id":"P-09547233PB351442AECAL2HQ","state":"ACTIVE","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payment_definitions":[{"id":"PD-52L66166C3279024HECAL2HQ","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-00G94514XL319523UECAL2HQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-2NE68414GA015690AECAL2HQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-5SG99877PJ9817422ECAL2HQ","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-34V40150JS539644SECAL2HQ","type":"TAX","amount":{"currency":"USD","value":"20"}},{"id":"CHM-7R198667TE764594PECAL2HQ","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"}},"links":[{"href":"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-09V09565B74284046","rel":"approval_url","method":"REDIRECT"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/EC-09V09565B74284046/agreement-execute","rel":"execute","method":"POST"}],"start_date":"2015-02-19T00:37:04Z"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'e250e8cc0bae3',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=22099&TopLevelTxnStartTime=1472080c11f&Host=slcsbjm3.slc.paypal.com&pid=24310',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:14 GMT',
  'content-type': 'application/json',
  'content-length': '1575' });

nock('https://api.sandbox.paypal.com')
  .get('/v1/payments/billing-agreements/I-08413VDRU6DE')
  .reply(200, {"id":"I-08413VDRU6DE","state":"Cancelled","description":"Newer Description","plan":{"payment_definitions":[{"type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20.00"},"charge_models":[{"type":"TAX","amount":{"currency":"USD","value":"20.00"}},{"type":"SHIPPING","amount":{"currency":"USD","value":"10.60"}}],"cycles":"4","frequency_interval":"1"},{"type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100.00"},"charge_models":[{"type":"TAX","amount":{"currency":"USD","value":"20.00"}},{"type":"SHIPPING","amount":{"currency":"USD","value":"10.60"}}],"cycles":"0","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25.00"},"max_fail_attempts":"1","auto_bill_amount":"YES"}},"links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-08413VDRU6DE/suspend","rel":"suspend","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-08413VDRU6DE/re-activate","rel":"re_activate","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-08413VDRU6DE/cancel","rel":"cancel","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-08413VDRU6DE/bill-balance","rel":"self","method":"POST"},{"href":"https://api.sandbox.paypal.com/v1/payments/billing-agreements/I-08413VDRU6DE/set-balance","rel":"self","method":"POST"}],"start_date":"2015-02-18T23:00:00Z","agreement_details":{"outstanding_balance":{"currency":"USD","value":"0.00"},"cycles_remaining":"4","cycles_completed":"0","last_payment_date":"2014-07-02T07:10:57Z","last_payment_amount":{"currency":"USD","value":"25.00"},"final_payment_date":"1970-01-01T00:00:00Z","failed_payment_count":"0"}}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=13627',
  'paypal-debug-id': '5fa7f67f046a4',
  server_info: 'paymentsplatformserv:v1.payments.billing-agreements&CalThreadId=80830&TopLevelTxnStartTime=1472080c2dc&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:14 GMT',
  'content-type': 'application/json',
  'content-length': '1744' });

nock('https://api.sandbox.paypal.com')
  .post('/v1/payments/billing-plans/', {"description":"Create Plan for Regular","merchant_preferences":{"auto_bill_amount":"yes","cancel_url":"http://www.cancel.com","initial_fail_amount_action":"continue","max_fail_attempts":"1","return_url":"http://www.success.com","setup_fee":{"currency":"USD","value":"25"}},"name":"Testing1-Regular1","payment_definitions":[{"amount":{"currency":"USD","value":"100"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"0","frequency":"MONTH","frequency_interval":"1","name":"Regular 1","type":"REGULAR"},{"amount":{"currency":"USD","value":"20"},"charge_models":[{"amount":{"currency":"USD","value":"10.60"},"type":"SHIPPING"},{"amount":{"currency":"USD","value":"20"},"type":"TAX"}],"cycles":"4","frequency":"MONTH","frequency_interval":"1","name":"Trial 1","type":"TRIAL"}],"type":"INFINITE"})
  .reply(201, {"id":"P-8M239038M4250351NECAMIPI","state":"CREATED","name":"Testing1-Regular1","description":"Create Plan for Regular","type":"INFINITE","payee":{"merchant_id":"2254677669463764251"},"payment_definitions":[{"id":"PD-6NM64917YN7765425ECAMIPI","name":"Regular 1","type":"REGULAR","frequency":"Month","amount":{"currency":"USD","value":"100"},"charge_models":[{"id":"CHM-5LV43906LJ307104DECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-0KE608780B2534216ECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"0","frequency_interval":"1"},{"id":"PD-6C822850FP2569353ECAMIPI","name":"Trial 1","type":"TRIAL","frequency":"Month","amount":{"currency":"USD","value":"20"},"charge_models":[{"id":"CHM-7HY62822F8753893WECAMIPI","type":"SHIPPING","amount":{"currency":"USD","value":"10.6"}},{"id":"CHM-2B6251795H312091PECAMIPI","type":"TAX","amount":{"currency":"USD","value":"20"}}],"cycles":"4","frequency_interval":"1"}],"merchant_preferences":{"setup_fee":{"currency":"USD","value":"25"},"max_fail_attempts":"1","return_url":"http://www.success.com","cancel_url":"http://www.cancel.com","auto_bill_amount":"YES","initial_fail_amount_action":"CONTINUE"},"create_time":"2014-07-10T13:40:15.549Z","update_time":"2014-07-10T13:40:15.549Z","links":[{"href":"https://api.sandbox.paypal.com/v1/payments/billing-plans/P-8M239038M4250351NECAMIPI","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=10599',
  'paypal-debug-id': '1c45c6a00b9e5',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=1472080c431&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:15 GMT',
  'content-type': 'application/json',
  'content-length': '1415' });

nock('https://api.sandbox.paypal.com')
  .patch('/v1/payments/billing-plans/P-8M239038M4250351NECAMIPI', [{"op":"replace","path":"/","value":{"state":"ACTIVE"}}])
  .reply(200, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=10599',
  'paypal-debug-id': '4b3143670bf17',
  server_info: 'paymentsplatformserv:v1.payments.billing-plans&CalThreadId=212&TopLevelTxnStartTime=1472080c55b&Host=slcsbjm1.slc.paypal.com&pid=17780',
  'content-language': '*',
  date: 'Thu, 10 Jul 2014 13:40:15 GMT',
  'content-type': 'text/xml',
  'content-length': '0' });

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
  .get('/v1/payments/billing-agreements/I-W0CR3PB7KTBB/transaction?start-date=2014-07-01&end-date=2014-07-20')
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