/* Copyright 2015-2016 PayPal, Inc. */
'use strict'

var paypal = require('../../../')
require('../../configure')

var webhookEventId = 'WH-1S115631EN580315E-9KH94552VF7913711'

paypal.notification.webhookEvent.resend(webhookEventId, function (error, webhookEventTypes) {
  if (error) {
    throw error
  } else {
    console.log('List webhookEventTypes Response')
    console.log(JSON.stringify(webhookEventTypes))
  }
})
