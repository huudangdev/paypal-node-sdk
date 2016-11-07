var nock = require('nock');

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/oauth2/token', "grant_type=client_credentials")
  .reply(200, "{\"scope\":\"https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card openid https://uri.paypal.com/services/invoicing https://api.paypal.com/v1/vault/credit-card/.*\",\"access_token\":\"Al7N4OzfeB65ZzJ3tlgNXNh5BsHBQD.R6nkG2uguNoQ\",\"token_type\":\"Bearer\",\"app_id\":\"APP-80W284485P519543T\",\"expires_in\":28800}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': '0244aa2132229',
  server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=130&TopLevelTxnStartTime=1459a734cde&Host=slcsbidensectoken501.slc.paypal.com&pid=12305',
  'correlation-id': '0244aa2132229',
  date: 'Fri, 25 Apr 2014 19:53:38 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/vault/credit-cards/', {"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018","cvv2":"123"})
  .reply(201, "{\"id\":\"CARD-5S105187UG0492942KNNL2QY\",\"state\":\"ok\",\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\",\"valid_until\":\"2017-04-24T00:00:00Z\",\"create_time\":\"2014-04-25T19:53:39Z\",\"update_time\":\"2014-04-25T19:53:39Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"delete\",\"method\":\"DELETE\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"patch\",\"method\":\"PATCH\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': 'e86be3fd33eea',
  'content-language': '*',
  'correlation-id': 'e86be3fd33eea',
  date: 'Fri, 25 Apr 2014 19:53:39 GMT',
  server_info: 'vaultplatformserv:v1.vault.credit-card&CalThreadId=1852&TopLevelTxnStartTime=1459a7350e2&Host=slcsbvaultplatformserv502.slc.paypal.com&pid=30900',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .get('/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY')
  .reply(200, "{\"id\":\"CARD-5S105187UG0492942KNNL2QY\",\"state\":\"ok\",\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\",\"valid_until\":\"2017-04-24T00:00:00Z\",\"create_time\":\"2014-04-25T19:53:39Z\",\"update_time\":\"2014-04-25T19:53:39Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"delete\",\"method\":\"DELETE\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-5S105187UG0492942KNNL2QY\",\"rel\":\"patch\",\"method\":\"PATCH\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=271',
  'paypal-debug-id': '8bba61903224e',
  'content-language': '*',
  'correlation-id': '8bba61903224e',
  date: 'Fri, 25 Apr 2014 19:53:40 GMT',
  server_info: 'vaultplatformserv:v1.vault.credit-card&CalThreadId=170&TopLevelTxnStartTime=1459a7353a4&Host=slcsbvaultplatformserv501.slc.paypal.com&pid=19516',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/vault/credit-cards/', {"type":"visa","number":"4417119669820331","expire_month":"11","expire_year":"2018","cvv2":"123"})
  .reply(201, "{\"id\":\"CARD-9RH7337754359873GKNNL2RI\",\"state\":\"ok\",\"type\":\"visa\",\"number\":\"xxxxxxxxxxxx0331\",\"expire_month\":\"11\",\"expire_year\":\"2018\",\"valid_until\":\"2017-04-24T00:00:00Z\",\"create_time\":\"2014-04-25T19:53:41Z\",\"update_time\":\"2014-04-25T19:53:41Z\",\"links\":[{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-9RH7337754359873GKNNL2RI\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-9RH7337754359873GKNNL2RI\",\"rel\":\"delete\",\"method\":\"DELETE\"},{\"href\":\"https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-9RH7337754359873GKNNL2RI\",\"rel\":\"patch\",\"method\":\"PATCH\"}]}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava2.slc.paypal.com;threadId=127',
  'paypal-debug-id': '2ecb355c33bbd',
  'content-language': '*',
  'correlation-id': '2ecb355c33bbd',
  date: 'Fri, 25 Apr 2014 19:53:41 GMT',
  server_info: 'vaultplatformserv:v1.vault.credit-card&CalThreadId=1852&TopLevelTxnStartTime=1459a735607&Host=slcsbvaultplatformserv502.slc.paypal.com&pid=30900',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });

nock('https://api.sandbox.paypal.com:443:443')
  .delete('/v1/vault/credit-cards/CARD-9RH7337754359873GKNNL2RI', {})
  .reply(204, "", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=368',
  'paypal-debug-id': 'f8f5995e326a2',
  'content-language': '*',
  'correlation-id': 'f8f5995e326a2',
  date: 'Fri, 25 Apr 2014 19:53:41 GMT',
  server_info: 'vaultplatformserv:v1.vault.credit-card&CalThreadId=1853&TopLevelTxnStartTime=1459a735896&Host=slcsbvaultplatformserv502.slc.paypal.com&pid=30900' });


nock('https://api.sandbox.paypal.com:443:443')
  .post('/v1/vault/credit-cards/', {})
  .reply(400, "{\"name\":\"VALIDATION_ERROR\",\"details\":[{\"field\":\"number\",\"issue\":\"Required field missing\"},{\"field\":\"expire_year\",\"issue\":\"Required field missing\"},{\"field\":\"expire_month\",\"issue\":\"Required field missing\"},{\"field\":\"type\",\"issue\":\"Required field missing\"}],\"message\":\"Invalid request - see details\",\"information_link\":\"https://developer.paypal.com/docs/api/#VALIDATION_ERROR\",\"debug_id\":\"430139cb3295e\"}", { server: 'Apache-Coyote/1.1',
  proxy_server_info: 'host=slcsbjava1.slc.paypal.com;threadId=271',
  'paypal-debug-id': '430139cb3295e',
  'content-language': '*',
  'correlation-id': '430139cb3295e',
  date: 'Fri, 25 Apr 2014 19:53:42 GMT',
  server_info: 'vaultplatformserv:v1.vault.credit-card&CalThreadId=170&TopLevelTxnStartTime=1459a735ab2&Host=slcsbvaultplatformserv501.slc.paypal.com&pid=19516',
  connection: 'close, close',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked' });
