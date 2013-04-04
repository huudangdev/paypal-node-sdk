/* Copyright 2013 PayPal */
"use strict";

var http = require('http');
var https = require('https');
var querystring = require('querystring');
var uuid = require('node-uuid');

module.exports = function () {

    var sdk_version = '0.5.0';
    var default_options = {
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'headers': {}
    };

    /* Merge Two Objects */

    function merge(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor === Object) {
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
                if (obj2[p].constructor === Object) {
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
        default_options = merge(default_options, options);
    }

    function generate_token(config_opts, cb) {

        if (typeof config_opts === "function") {
            cb = config_opts;
            config_opts = default_options;
        } else if (!config_opts) {
            config_opts = default_options;
        }

        var basicAuthString = 'Basic ' + new Buffer(config_opts.client_id + ':' + config_opts.client_secret).toString('base64');

        var http_options = {
            host:  config_opts.host || default_options.host,
            port:  config_opts.port || default_options.port,
            headers: {
                'Authorization': basicAuthString,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        var token = null;
        invoke('https', 'POST', '/v1/oauth2/token', 'grant_type=client_credentials', http_options, function (err, res) {
            if (err) {
                throw err;
            }

            if (res) {
                token = res.token_type + ' ' + res.access_token;
            }

            cb(err, token);
        });

    }

    function update_token(http_options, callback) {
        generate_token(http_options, function (err, token) {
            http_options.headers.Authorization = token;
            callback();
        });
    }


    function executeHttp(http_scheme, http_method, path, data, http_options, cb) {
        if (typeof http_options === "function") {
            cb = http_options;
            http_options = null;
        }
        if (!http_options) {
            http_options = default_options;
        } else {
            http_options = copy_missing(http_options, default_options);
        }

        function retry_invoke() {
            invoke(http_scheme, http_method, path, data, http_options, cb);
        }

        if (http_options.headers.Authorization) {
            invoke(http_scheme, http_method, path, data, http_options, function (error, response) {
                if (error && error.httpStatusCode === 401 && http_options.client_id && http_options.headers.Authorization) {
                    http_options.headers.Authorization = null;
                    update_token(http_options, retry_invoke);
                } else {
                    cb(error, response);
                }
            });
        } else {
            update_token(http_options, retry_invoke);
        }
    }

    function invoke(http_scheme, http_method, path, data, http_options_param, cb) {
        var client = (http_scheme !== 'https') ? http : https;

        data = (http_method !== 'GET' && typeof data !== 'string') ? JSON.stringify(data) : data;

        var request_data = (http_method !== 'GET') ? data : querystring.stringify(data);

        var http_options = {};

        if (http_options_param) {

            http_options = JSON.parse(JSON.stringify(http_options_param));

            if (!http_options.headers) {
                http_options.headers = {};
            }
            http_options.path = path;
            http_options.method = http_method;
            http_options.headers['Content-Length'] = request_data.length;

            if (!http_options.headers.Accept) {
                http_options.headers.Accept = 'application/json';
            }

            if (!http_options.headers['Content-Type']) {
                http_options.headers['Content-Type'] = 'application/json';
            }

            if (http_method !== 'GET' && !http_options.headers['PayPal-Request-Id']) {
                http_options.headers['PayPal-Request-Id'] = uuid.v4();
            }

            var user_agent = 'PayPalSDK/rest-sdk-nodejs ' + sdk_version + ' (arch: ' + process.arch + ';  platform: ' + process.platform + '; ' + JSON.stringify(process.versions) + ')';
            http_options.headers['User-Agent'] = user_agent;
        }


        var req = client.request(http_options);

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        req.on('response', function (res) {
            var response = '';
            res.setEncoding('utf8');
            res.on('data',

            function (chunk) {
                response += chunk;
            });
            res.on('end',

            function () {
                var err = null;
                try {
                    response = JSON.parse(response);

                    response.httpStatusCode = res.statusCode;
                    if (res.statusCode < 200 || res.statusCode >= 300) {
                        err = new Error('Response Status : ' + res.statusCode);
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
        version: sdk_version,
        configure: function (options) {
            configure(options);
        },
        generate_token: function (config_opts, cb) {
            generate_token(config_opts, cb);
        },
        payment: {
            create: function (data, config_opts, cb) {
                executeHttp('https', 'POST', '/v1/payments/payment/', data, config_opts, cb);
            },
            get: function (payment_id, config_opts, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment/' + payment_id, {}, config_opts, cb);
            },
            list: function (data, config_opts, cb) {
                executeHttp('https', 'GET', '/v1/payments/payment', data, config_opts, cb);
            },
            execute: function (payment_id, data, config_opts, cb) {
                executeHttp('https', 'POST', '/v1/payments/payment/' + payment_id + '/execute', data, config_opts, cb);
            }
        },
        sale: {
            refund: function (sale_id, data, config_opts, cb) {
                executeHttp('https', 'POST', '/v1/payments/sale/' + sale_id + '/refund', data, config_opts, cb);
            },
            get: function (sale_id, config_opts, cb) {
                executeHttp('https', 'GET', '/v1/payments/sale/' + sale_id, {}, config_opts, cb);
            }
        },
        refund: {
            get: function (refund_id, config_opts, cb) {
                executeHttp('https', 'GET', '/v1/payments/refund/' + refund_id, {}, config_opts, cb);
            }
        },
        credit_card: {
            create: function (data, config_opts, cb) {
                executeHttp('https', 'POST', '/v1/vault/credit-card/', data, config_opts, cb);
            },
            get: function (credit_card_id, config_opts, cb) {
                executeHttp('https', 'GET', '/v1/vault/credit-card/' + credit_card_id, {}, config_opts, cb);
            }
        }
    };

};