/* Copyright 2015-2016 PayPal, Inc. */
'use strict'

var paypal = require('../../../')
require('../../configure')

var webhookEventId = 'WH-7285486103862532R-5WM67492J86746059'

paypal.notification.webhookEvent.get(webhookEventId, function (error, webhookEvent) {
  if (error) {
    console.log(error)
    throw error
  } else {
    console.log('Get webhookEvent Response')
    console.log(JSON.stringify(webhookEvent))
  }
})
