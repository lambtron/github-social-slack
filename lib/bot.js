#!/usr/bin/env node

/**
 * Module dependencies.
 */

var github = require('./github');
var fmt = require('../lib/fmt');
var slack = require('./slack');
var moment = require('moment');
var co = require('co');

/**
 * Run the program.
 */

co(main());

/**
 * define Main function.
 */

function *main() {
  var anHourAgo = parseInt(moment().subtract(1, 'hour').format('x'));
  var e = yield github.events(anHourAgo);
  if (e.length > 0) return yield slack(e);
}
