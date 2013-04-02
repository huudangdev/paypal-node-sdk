/* Copyright 2013 PayPal */
"use strict";

var http = require('http');
var https = require('https');
var querystring = require('querystring');
var uuid = require('node-uuid');

module.exports = function() {

    var sdk_version = '0.5.0';
    var deafult_options = {
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'headers': {}
    };

    /* Merge Two Objects */

    function merge(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor == Object) {
                    obj1[p] = merge(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    function copy_missing(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor == Object) {
                    if (!obj1[p]) {
                        obj1[p] = {};
                    }

                } else if (!obj1[p]) {
                    obj1[p] = obj2[p];

                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    function configure(options) {
        deafult_options = merge(deafult_options, options);
    }

    function generateToken(client_id, client_secret, cb) {

        var basicAuthString = 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64');

        var http_options = {
            host: deafult_options.host,
            port: deafult_options.port,
            headers: {
                'Authorization': basicAuthString,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        var token = null;
        invoke('https', 'POST', '/v1/oauth2/token', 'response_type=token&grant_type=client_credentials', http_options, function( err, res) {
            if (err) {
                throw err;
            }

            if (res) {
                token = res.token_type + ' ' + res.access_token;
            }

            cb(token);
        });

    }

    function handle_expired_token(http_options, callback) {
        generateToken(http_options.client_id, http_options.client_secret, function(token) {
            http_options.headers.Authorization = token;
            callback();
        });
    };


    function executeHttp(http_scheme, http_method, path, data, http_options, cb) {
        if (!http_options) {
            http_options = deafult_options;
        } else {
            http_options = copy_missing(http_options, deafult_options);
        }

        function retry_invoke() {
            invoke(http_scheme, http_method, path, data, http_options, cb);
        };

        if (http_options.headers.Authorization) {
            invoke(http_scheme, http_method, path, data, http_options, function(error, response) {
                if (error && error.httpStatusCode == 401 && http_options.client_id && http_options.headers.Authorization) {
                    http_options.headers.Authorization = null;
                    handle_expired_token(http_options, retry_invoke);
                } else {
                    cb( error, response);
                }
            });
        } else {
            handle_expired_token(http_options, retry_invoke);
        }
    }

    function invoke(http_scheme, http_method, path, data, http_options_param, cb) {


        var client = (http_scheme != 'https') ? http : https;

        var request_data = (http_method != 'GET') ? data : querystring.stringify(data);

        var http_options = {};

        if (http_options_param) {

            http_options = JSON.parse(JSON.stringify(http_options_param));

            if (!http_options.headers) {
                http_options['headers'] = {};
            }
            http_options['path'] = path;
            http_options['method'] = http_method;
            http_options.headers['Content-Length'] = request_data.length;

            if (!http_options.headers['Accept']) {
                http_options.headers['Accept'] = 'application/json';
            }

            if (!http_options.headers['Content-Type']) {
                http_options.headers['Content-Type'] = 'application/json';
            }

            if (http_method != 'GET' && !http_options.headers['PayPal-Request-Id']) {
                http_options.headers['PayPal-Request-Id'] = uuid.v4();
            }

            var user_agent = 'PayPalSDK/rest-sdk-nodejs ' + sdk_version + ' (arch: ' + process.arch + ';  platform: ' + process.platform + '; ' + JSON.stringify(process.versions) + ')';
            http_options.headers['User-Agent'] = user_agent;

        } else {
            http_options = http_options_param;
        }



        var req = client.request(http_options);

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.on('response', function(res) {
            var response = '';
            var resText = '';
            res.setEncoding('utf8');
            res.on('data',

            function(chunk) {
                response += chunk;
            });
            res.on('end',

            function() {
                var err = null;
                try {
                    resText = response.toString();
                    response = JSON.parse(response);

                    response.httpStatusCode = res.statusCode;
                    if (res.statusCode < 200 || res.statusCode >= 300) {
                        err = new Error();
                        err.error = response;
                        err.httpStatusCode = res.statusCode;
                        response = null;
                    }
                } catch (e) {
                    err = new Error('Invalid JSON Response Received');
                    err.error = {
                        name: 'Invalid JSON Response Received, JSON Parse Error'
                    };
                    err.httpStatusCode = res.statusCode;
                    response = null;
                }
                cb(err, response);
            });
        });

        req.write(request_data);
        req.end();
    }


    return {
        configure: function(options) {
            configure(options);
        },
        generateToken: function(client_id, client_secret, cb) {
            generateToken(client_id, client_secret, cb);
        },
        executeHttp: function(http_scheme, http_method, path, data, http_options, cb) {
            executeHttp(http_scheme, http_method, path, data, http_options, cb);
        },
        payment: {
            create: function(data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/payments/payment/', (typeof data != 'string') ? JSON.stringify(data) : data, http_options, cb);
            },
            get: function(payment_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment/' + payment_id, {}, http_options, cb);
            },
            list: function(data, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment', data, http_options, cb);
            }
        },
        sale: {
            refund: function(sale_id, data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/payments/sale/' + sale_id + '/refund', (typeof data != 'string') ? JSON.stringify(data) : data, http_options, cb);
            },
            get: function(sale_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/sale/' + sale_id, {}, http_options, cb);
            }
        },
        refund: {
            get: function(refund_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/payments/refund/' + refund_id, {}, http_options, cb);
            }
        },
        credit_card: {
            create: function(data, http_options, cb) {
                executeHttp('https', 'POST', '/v1/vault/credit-card/', (typeof data != 'string') ? JSON.stringify(data) : data, http_options, cb);
            },
            get: function(credit_card_id, http_options, cb) {
                executeHttp('https', 'GET', '/v1/vault/credit-card/' + credit_card_id, {}, http_options, cb);
            }
        }
    }

}