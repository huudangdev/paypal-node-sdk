var nock = require('nock');

nock('https://api.sandbox.paypal.com')
    .post('/v1/oauth2/token', "grant_type=client_credentials")
    .reply(200, {
        "scope": "https://uri.paypal.com/services/invoicing openid https://api.paypal.com/v1/developer/.* https://api.paypal.com/v1/payments/.* https://api.paypal.com/v1/vault/credit-card/.* https://api.paypal.com/v1/vault/credit-card",
        "access_token": "A0150D25YheAsbQLt0TMCraUZevO5rBV4pKeoNqpMv9KqoU",
        "token_type": "Bearer",
        "app_id": "APP-2EJ531395M785864S",
        "expires_in": 28800
    }, {
        server: 'Apache-Coyote/1.1',
        proxy_server_info: 'host=slcsbjava4.slc.paypal.com;threadId=2676',
        'paypal-debug-id': '986af3d0d29c6',
        server_info: 'identitysecuretokenserv:v1.oauth2.token&CalThreadId=23778&TopLevelTxnStartTime=147c11dda7e&Host=slcsbidensectoken501.slc.paypal.com&pid=22315',
        date: 'Sun, 10 Aug 2014 18:11:05 GMT',
        'content-type': 'application/json',
        'content-length': '367'
    });


nock('https://api.sandbox.paypal.com')
    .post('/v1/invoicing/templates/', {
        "name": "Hours Template",
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {"currency": "USD", "value": "50.00"}
            }],
            "merchant_info": {"email": "stevendcoffey-facilitator@gmail.com"},
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "settings": [{"field_name": "items.date", "display_preference": {"hidden": true}}, {
            "field_name": "custom",
            "display_preference": {"hidden": true}
        }]
    })
    .reply(201, {
        "template_id": "TEMP-XYZ",
        "name": "Hours Template",
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {"currency": "USD", "value": "50.00"}
            }],
            "merchant_info": {"email": "stevendcoffey-facilitator@gmail.com"},
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "settings": [{"field_name": "items.date", "display_preference": {"hidden": true}}, {
            "field_name": "custom",
            "display_preference": {"hidden": true}
        }]
    }, {
        proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
        'paypal-debug-id': '47cfef71d28dc',
        date: 'Sun, 10 Aug 2014 18:11:06 GMT',
        location: 'https://api.sandbox.paypal.com/v1/invoicing/templates/TMP-XYZ',
        'content-type': 'application/json',
        'content-length': '1041'
    });

nock('https://api.sandbox.paypal.com')
    .patch(/\/v1\/invoicing\/templates\/TEMP-[A-Z]{3}/, {
        "template_id": "TEMP-XYZ",
        "name": "Hours Template - modified",
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {"currency": "USD", "value": "50.00"}
            }],
            "merchant_info": {"email": "stevendcoffey-facilitator@gmail.com"},
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "settings": [{"field_name": "items.date", "display_preference": {"hidden": true}}, {
            "field_name": "custom",
            "display_preference": {"hidden": true}
        }]
    })
    .reply(201, {
        "template_id": "TEMP-XYZ",
        "name": "Hours Template - modified",
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {"currency": "USD", "value": "50.00"}
            }],
            "merchant_info": {"email": "stevendcoffey-facilitator@gmail.com"},
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "settings": [{"field_name": "items.date", "display_preference": {"hidden": true}}, {
            "field_name": "custom",
            "display_preference": {"hidden": true}
        }]
    }, {
        proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
        'paypal-debug-id': '47cfef71d28dc',
        date: 'Sun, 10 Aug 2014 18:11:06 GMT',
        location: 'https://api.sandbox.paypal.com/v1/invoicing/templates/TMP-XYZ',
        'content-type': 'application/json',
        'content-length': '1041'
    });

nock('https://api.sandbox.paypal.com')
    .get(/\/v1\/invoicing\/templates\/TEMP-[A-Z]{3}/)
    .reply(200, {
        "template_id": "TEMP-XYZ",
        "name": "Hours Template",
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {"currency": "USD", "value": "50.00"}
            }],
            "merchant_info": {"email": "stevendcoffey-facilitator@gmail.com"},
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "settings": [{"field_name": "items.date", "display_preference": {"hidden": true}}, {
            "field_name": "custom",
            "display_preference": {"hidden": true}
        }]
    }, {
        proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
        'paypal-debug-id': '47cfef71d28dc',
        date: 'Sun, 10 Aug 2014 18:11:06 GMT',
        location: 'https://api.sandbox.paypal.com/v1/invoicing/templates/TEMP-XYZ',
        'content-type': 'application/json',
        'content-length': '1041'
    });

nock('https://api.sandbox.paypal.com')
    .get('/v1/invoicing/templates/not-an-invoice-template')
    .reply(404, {"name": "BUSINESS_ERROR", "message": "Invalid encrypted id.", "debug_id": "f31854cbd10a3"}, {
        proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
        'paypal-debug-id': '47cfef71d28dc',
        date: 'Sun, 10 Aug 2014 18:11:06 GMT',
        connection: 'close, close',
        'content-type': 'application/json',
        'content-length': '86'
    });

nock('https://api.sandbox.paypal.com')
    .get('/v1/invoicing/templates/')
    .reply(200,
        {
            "addresses": [{
                "line1": "2211 N 1st Street",
                "city": "San Jose",
                "postal_code": "95131",
                "state": "CA"
            }],
            "emails": [
                "invoicing-merchant@paypal.com",
                "invoicing-merch-store2@paypal.com"
            ],
            "phones": [{
                "country_code": "1",
                "national_number": "4085057783"
            }, {
                "country_code": "1",
                "national_number": "4088064703"
            }],
            "templates": [{
                "template_id": "TEMP-XYZ",
                "name": "Hours Template",
                "default": true,
                "unit_of_measure": "Hours",
                "template_data": {
                    "items": [{
                        "name": "Nutri Bullet",
                        "quantity": 1,
                        "unit_price": {
                            "currency": "USD",
                            "value": "50.00"
                        }
                    }],
                    "tax_calculated_after_discount": false,
                    "tax_inclusive": false,
                    "note": "Thank you for your business.",
                    "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
                },
                "settings": [{
                    "field_name": "items.date",
                    "display_preference": {
                        "hidden": true
                    }
                }, {
                    "field_name": "custom",
                    "display_preference": {
                        "hidden": true
                    }
                }],
                "links": [{
                    "href": "https://api.sandbox.paypal.com/v1/invoicing/templates/TEMP-XYZ",
                    "rel": "self",
                    "method": "GET"
                }, {
                    "href": "https://api.sandbox.paypal.com/v1/invoicing/templates/TEMP-XYZ",
                    "rel": "replace",
                    "method": "PUT"
                }, {
                    "href": "https://api.sandbox.paypal.com/v1/invoicing/templates/TEMP-XYZ",
                    "rel": "delete",
                    "method": "DELETE"
                }]
            }],
            "links": [{
                "href": "https://api.sandbox.paypal.com/v1/invoicing/templates",
                "rel": "collection",
                "method": "GET"
            }]
        }
        , {
            proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2734',
            'paypal-debug-id': '47cfef71d28dc',
            date: 'Sun, 10 Aug 2014 18:11:06 GMT',
            location: 'https://api.sandbox.paypal.com/v1/invoicing/templates/',
            'content-type': 'application/json',
            'content-length': '1965'
        });

nock('https://api.sandbox.paypal.com')
    .delete(/\/v1\/invoicing\/templates\/TEMP-[A-Z]{3}/)
    .reply(204, "", {
        server: 'Apache-Coyote/1.1',
        proxy_server_info: 'host=slcsbjava3.slc.paypal.com;threadId=2732',
        'paypal-debug-id': '4a477616ebc5b',
        date: 'Sun, 10 Aug 2014 18:11:33 GMT'
    });

