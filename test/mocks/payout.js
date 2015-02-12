var nock = require('nock');

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015Jik4tFmTbfRYQdy.rsF.VpEHB.prkpuS8R4EUgWfIHc","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=2694',
  'paypal-debug-id': '4c4c6a50334b8',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=769&TopLevelTxnStartTime=14a4e864b2b&Host=slcsbidensectoken501.slc.paypal.com&pid=3787',
  date: 'Mon, 15 Dec 2014 15:17:11 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=false', {"sender_batch_header":{"sender_batch_id":"t1000","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"recipient_type":"EMAIL","amount":{"value":0.9,"currency":"USD"},"receiver":"shirt-supplier-two@mail.com","note":"Thank you.","sender_item_id":"item_2"},{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"AJHKPW9KYBTWA","batch_status":"PENDING","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"t1000"}},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/AJHKPW9KYBTWA","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1216',
  'paypal-debug-id': '47c84eee3c7f0',
  'content-language': '*',
  date: 'Mon, 15 Dec 2014 15:17:14 GMT',
  'content-type': 'application/json',
  'content-length': '278' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015.ryo3JGimSC5n-AJBlIsivcVMnbba9NMH4fkAWBhgYs","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1048',
  'paypal-debug-id': '90721dc2e051d',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=73179&TopLevelTxnStartTime=14a5168375e&Host=slcsbidensectoken501.slc.paypal.com&pid=3787',
  date: 'Tue, 16 Dec 2014 04:43:12 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .get('/v1/payments/payouts/R3LFR867ESVQY')
  .reply(200, {"batch_header":{"payout_batch_id":"R3LFR867ESVQY","batch_status":"SUCCESS","time_created":"2014-55-11T01:55:28Z","time_completed":"2014-55-11T01:55:53Z","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"batch_25"},"amount":{"currency":"USD","value":"0.99"},"fees":{"currency":"USD","value":"0.02"}},"items":[{"payout_item_id":"DFNMVY92UC32Q","transaction_id":"8MA59875RV972980C","transaction_status":"UNCLAIMED","payout_item_fee":{"currency":"USD","value":"0.02"},"payout_batch_id":"R3LFR867ESVQY","payout_item":{"amount":{"currency":"USD","value":"0.99"},"note":"Thank you.","receiver":"andas222@mail.com","recipient_type":"EMAIL","sender_item_id":"item_1"},"time_processed":"2014-55-11T01:55:45Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/DFNMVY92UC32Q","rel":"item","method":"GET"}]}],"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/R3LFR867ESVQY","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1048',
  'paypal-debug-id': '5a6340ade61a9',
  'content-language': '*',
  date: 'Tue, 16 Dec 2014 04:43:19 GMT',
  'content-type': 'application/json',
  'content-length': '1043' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015FGTr3h5QcDpiWmjDgQdBI9s5SypFBvM4RWCDf38FyIY","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=659',
  'paypal-debug-id': '656e52c49e267',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=73179&TopLevelTxnStartTime=14a52af92c4&Host=slcsbidensectoken501.slc.paypal.com&pid=3787',
  date: 'Tue, 16 Dec 2014 10:40:45 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=true', {"sender_batch_header":{"sender_batch_id":"t400","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"7LHNN5KX7WVDC","batch_status":"SUCCESS","time_created":"2014-40-16T10:40:48Z","time_completed":"2014-40-16T10:40:53Z","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"t400"},"amount":{"currency":"USD","value":"0.15"},"fees":{"currency":"USD","value":"0.0"}},"items":[{"payout_item_id":"VXURV6Y48P898","transaction_id":"5FU55828X3939910A","transaction_status":"UNCLAIMED","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"7LHNN5KX7WVDC","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"time_processed":"2014-40-16T10:40:53Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/VXURV6Y48P898","rel":"item","method":"GET"}]}],"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/7LHNN5KX7WVDC","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=1005',
  'paypal-debug-id': 'd0957c149ec7c',
  'content-language': '*',
  date: 'Tue, 16 Dec 2014 10:40:53 GMT',
  'content-type': 'application/json',
  'content-length': '1049' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A0154hipRA5M8S6nLelgn.iRl5Akz1WZYSRILqXSWxUjQ0I","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=2550',
  'paypal-debug-id': '83575ffd23f4d',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=29934&TopLevelTxnStartTime=14a53649fe7&Host=slcsbidensectoken502.slc.paypal.com&pid=7786',
  date: 'Tue, 16 Dec 2014 13:58:32 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=false', {"sender_batch_header":{"sender_batch_id":"t100","email_subject":"You have a payment","recipient_type":"EMAIL"},"items":[{"amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"FTVHZPJW9USHY","batch_status":"PENDING","sender_batch_header":{"email_subject":"You have a payment","recipient_type":"EMAIL","sender_batch_id":"t100"}},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/FTVHZPJW9USHY","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1155',
  'paypal-debug-id': 'db88233f26403',
  'content-language': '*',
  date: 'Tue, 16 Dec 2014 13:58:34 GMT',
  'content-type': 'application/json',
  'content-length': '302' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015gGJwSK1Ejnjyg5H.GYvH5gSTnpexqqf7-hN4BQc7EsQ","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1172',
  'paypal-debug-id': '4d27a188ffd5f',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=147&TopLevelTxnStartTime=14a540911cc&Host=slcsbidensectoken502.slc.paypal.com&pid=7786',
  date: 'Tue, 16 Dec 2014 16:58:08 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=true', {"sender_batch_header":{"sender_batch_id":"t1000","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"recipient_type":"EMAIL","amount":{"value":0.9,"currency":"USD"},"receiver":"shirt-supplier-two@mail.com","note":"Thank you.","sender_item_id":"item_2"},{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(400, {"name":"VALIDATION_ERROR","message":"Invalid request - see details.","debug_id":"e9bedff7ff05d","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#VALIDATION_ERROR","details":[{"field":"items","issue":"SIZE_LIMIT_EXCEEDED_FOR_SYNC_PAYOUT"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1297',
  'paypal-debug-id': 'e9bedff7ff05d',
  'content-language': '*',
  date: 'Tue, 16 Dec 2014 16:58:10 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '268' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A0151zSJgj7FirlbK9qLSosVxyYF5-EE5hEz-zcdruGHVJo","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1213',
  'paypal-debug-id': '104c9218d81ac',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=24026&TopLevelTxnStartTime=14a58ca6217&Host=slcsbidensectoken502.slc.paypal.com&pid=7786',
  date: 'Wed, 17 Dec 2014 15:07:46 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .get('/v1/payments/payouts-item/VXURV6Y48P898')
  .reply(200, {"payout_item_id":"VXURV6Y48P898","transaction_id":"5FU55828X3939910A","transaction_status":"UNCLAIMED","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"7LHNN5KX7WVDC","sender_batch_id":"t400","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"time_processed":"2014-40-16T10:40:53Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/VXURV6Y48P898","rel":"self","method":"GET"},{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/7LHNN5KX7WVDC","rel":"batch","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1213',
  'paypal-debug-id': 'a1aa941bd8ed1',
  'content-language': '*',
  date: 'Wed, 17 Dec 2014 15:07:48 GMT',
  'content-type': 'application/json',
  'content-length': '730' });
  
nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts-item/VXURV6Y48P898/cancel')
  .reply(200, {"payout_item_id":"VXURV6Y48P898","transaction_id":"5FU55828X3939910A","transaction_status":"RETURNED","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"7LHNN5KX7WVDC","sender_batch_id":"t400","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"time_processed":"2014-40-16T10:40:53Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/VXURV6Y48P898","rel":"self","method":"GET"},{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/7LHNN5KX7WVDC","rel":"batch","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1213',
  'paypal-debug-id': 'a1aa941bd8ed1',
  'content-language': '*',
  date: 'Wed, 17 Dec 2014 15:07:48 GMT',
  'content-type': 'application/json',
  'content-length': '730' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A0158Nv9XRZ.9oPK7bI8miJ77cJb18dTz7LJy7vFotW-.00","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1221',
  'paypal-debug-id': '9968c70e7695f',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=381645&TopLevelTxnStartTime=14a58d08c5e&Host=slcsbidensectoken502.slc.paypal.com&pid=7786',
  date: 'Wed, 17 Dec 2014 15:14:30 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=false', {"sender_batch_header":{"sender_batch_id":"tduplicate","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"recipient_type":"EMAIL","amount":{"value":0.9,"currency":"USD"},"receiver":"shirt-supplier-two@mail.com","note":"Thank you.","sender_item_id":"item_2"},{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"YEBASRUGX4ZN4","batch_status":"PENDING","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"tduplicate"}},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/YEBASRUGX4ZN4","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=1965',
  'paypal-debug-id': '753fe28b772a3',
  'content-language': '*',
  date: 'Wed, 17 Dec 2014 15:14:33 GMT',
  'content-type': 'application/json',
  'content-length': '283' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=false', {"sender_batch_header":{"sender_batch_id":"tduplicate","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"recipient_type":"EMAIL","amount":{"value":0.9,"currency":"USD"},"receiver":"shirt-supplier-two@mail.com","note":"Thank you.","sender_item_id":"item_2"},{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(400, {"name":"USER_BUSINESS_ERROR","message":"User business error.","debug_id":"7fc3b4d876e98","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#USER_BUSINESS_ERROR","details":[{"field":"SENDER_BATCH_ID","issue":"Duplicate batch request"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=1647',
  'paypal-debug-id': '7fc3b4d876e98',
  'content-language': '*',
  date: 'Wed, 17 Dec 2014 15:14:35 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '262' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015ilnt6vajFMC0ujr4jk6H2b0o21aUbVK4bbfjVrbjo0w","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=415703',
  'paypal-debug-id': '4e8c89c96f135',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=560886&TopLevelTxnStartTime=14b36800078&Host=slcsbidensectoken502.slc.paypal.com&pid=7904',
  date: 'Thu, 29 Jan 2015 16:22:13 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=true', {"sender_batch_header":{"sender_batch_id":"payout94","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"W46J7D4CQQTMY","batch_status":"SUCCESS","time_created":"2015-01-29T16:22:14Z","time_completed":"2015-01-29T16:22:19Z","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"payout94"},"amount":{"currency":"USD","value":"0.15"},"fees":{"currency":"USD","value":"0.0"}},"items":[{"payout_item_id":"5UD3FSLKEZ63C","transaction_id":"5KT85791B7724820A","transaction_status":"UNCLAIMED","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"W46J7D4CQQTMY","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"time_processed":"2015-01-29T16:22:19Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#RECEIVER_UNREGISTERED"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/5UD3FSLKEZ63C","rel":"item","method":"GET"}]}],"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/W46J7D4CQQTMY","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=424717',
  'paypal-debug-id': '0c0b9a8b6ff31',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:22:20 GMT',
  'content-type': 'application/json',
  'content-length': '1153' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts-item/5UD3FSLKEZ63C/cancel', {})
  .reply(200, {"payout_item_id":"5UD3FSLKEZ63C","transaction_id":"5KT85791B7724820A","transaction_status":"RETURNED","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"W46J7D4CQQTMY","sender_batch_id":"payout94","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"time_processed":"2015-01-29T16:22:19Z","errors":{"name":"RECEIVER_UNREGISTERED","message":"Receiver is unregistered","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#RECEIVER_UNREGISTERED"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/5UD3FSLKEZ63C","rel":"self","method":"GET"},{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/W46J7D4CQQTMY","rel":"batch","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=415703',
  'paypal-debug-id': '8e2061f56ed13',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:22:22 GMT',
  'content-type': 'application/json',
  'content-length': '833' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015B4Rf1PvrSkSSgMpkfyvXJ-snbBHZEXudS9-8a6mn02A","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=374233',
  'paypal-debug-id': '3469156b10656',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=388858&TopLevelTxnStartTime=14b3687f900&Host=slcsbidensectoken501.slc.paypal.com&pid=8642',
  date: 'Thu, 29 Jan 2015 16:30:56 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts-item/5UD3FSLKEZ63/cancel', {})
  .reply(400, {"name":"ITEM_ALREADY_CANCELLED","message":"Requested item is already cancelled.","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ITEM_ALREADY_CANCELLED"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=415789',
  'paypal-debug-id': '11f89e1310fa4',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:30:56 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '183' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, {"scope":"https://uri.paypal.com/services/subscriptions https://api.paypal.com/v1/payments/.* email https://api.paypal.com/v1/vault/credit-card https://uri.paypal.com/services/applications/webhooks openid https://uri.paypal.com/services/invoicing https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.*","access_token":"A015XK-QysP6bkUW0xMRhVPOZ054u.o1IKW444WrMi5WMjw","token_type":"Bearer","app_id":"APP-80W284485P519543T","expires_in":28800}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3002.slc.paypal.com;threadId=371029',
  'paypal-debug-id': '9644a9b91e08b',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=132&TopLevelTxnStartTime=14b369718ae&Host=slcsbidensectoken501.slc.paypal.com&pid=8642',
  date: 'Thu, 29 Jan 2015 16:47:27 GMT',
  'content-type': 'application/json',
  'content-length': '474' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts/?sync_mode=false', {"sender_batch_header":{"sender_batch_id":"batch65","email_subject":"You have a payment"},"items":[{"recipient_type":"EMAIL","amount":{"value":0.99,"currency":"USD"},"receiver":"shirt-supplier-one@mail.com","note":"Thank you.","sender_item_id":"item_1"},{"recipient_type":"EMAIL","amount":{"value":0.9,"currency":"USD"},"receiver":"shirt-supplier-two@mail.com","note":"Thank you.","sender_item_id":"item_2"},{"recipient_type":"EMAIL","amount":{"value":0.15,"currency":"USD"},"receiver":"shirt-supplier-three@mail.com","note":"Thank you.","sender_item_id":"item_3"}]})
  .reply(201, {"batch_header":{"payout_batch_id":"CTPMT7FNSRTJW","batch_status":"PENDING","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"batch65"}},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/CTPMT7FNSRTJW","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=424690',
  'paypal-debug-id': 'ce68c0130195f',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:47:27 GMT',
  'content-type': 'application/json',
  'content-length': '280' });

nock('https://api-s.sandbox.paypal.com')
  .get('/v1/payments/payouts/CTPMT7FNSRTJW')
  .reply(200, {"batch_header":{"payout_batch_id":"CTPMT7FNSRTJW","batch_status":"PENDING","time_created":"2015-01-29T16:47:27Z","sender_batch_header":{"email_subject":"You have a payment","sender_batch_id":"batch65"},"amount":{"currency":"USD","value":"2.04"},"fees":{"currency":"USD","value":"0.04"}},"items":[{"payout_item_id":"UK6HNZEQX8M8S","transaction_status":"PENDING","payout_item_fee":{"currency":"USD","value":"0.02"},"payout_batch_id":"CTPMT7FNSRTJW","payout_item":{"amount":{"currency":"USD","value":"0.99"},"note":"Thank you.","receiver":"shirt-supplier-one@mail.com","recipient_type":"EMAIL","sender_item_id":"item_1"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/UK6HNZEQX8M8S","rel":"item","method":"GET"}]},{"payout_item_id":"93M9XBAG6PP8J","transaction_status":"PENDING","payout_item_fee":{"currency":"USD","value":"0.02"},"payout_batch_id":"CTPMT7FNSRTJW","payout_item":{"amount":{"currency":"USD","value":"0.9"},"note":"Thank you.","receiver":"shirt-supplier-two@mail.com","recipient_type":"EMAIL","sender_item_id":"item_2"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/93M9XBAG6PP8J","rel":"item","method":"GET"}]},{"payout_item_id":"D2G6SGWQVQ4X8","transaction_status":"PENDING","payout_item_fee":{"currency":"USD","value":"0.0"},"payout_batch_id":"CTPMT7FNSRTJW","payout_item":{"amount":{"currency":"USD","value":"0.15"},"note":"Thank you.","receiver":"shirt-supplier-three@mail.com","recipient_type":"EMAIL","sender_item_id":"item_3"},"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts-item/D2G6SGWQVQ4X8","rel":"item","method":"GET"}]}],"links":[{"href":"https://api-s.sandbox.paypal.com/v1/payments/payouts/CTPMT7FNSRTJW","rel":"self","method":"GET"}]}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=424690',
  'paypal-debug-id': '3625983901d4c',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:47:27 GMT',
  'content-type': 'application/json',
  'content-length': '1738' });

nock('https://api-s.sandbox.paypal.com')
  .post('/v1/payments/payouts-item/UK6HNZEQX8M8S/cancel', {})
  .reply(400, {"name":"ITEM_INCORRECT_STATUS","message":"Only items in Unclaimed status can be cancelled.","information_link":"https://developer.paypal.com/webapps/developer/docs/api/#ITEM_INCORRECT_STATUS"}, { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbplatformapiserv3001.slc.paypal.com;threadId=424690',
  'paypal-debug-id': '26c87e8102326',
  'content-language': '*',
  date: 'Thu, 29 Jan 2015 16:47:27 GMT',
  connection: 'close, close',
  'content-type': 'application/json',
  'content-length': '193' });
