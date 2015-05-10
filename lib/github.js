
/**
 * Module dependencies.
 */

var get = require('./request').get;
var moment = require('moment');
var _ = require('lodash');

/**
 * Get all events starting from (optional) startAt
 */

exports.events = function *(startAt) {
  var uri = 'https://api.github.com/users/' + process.env.GITHUB_USER + '/received_events/public?access_token=' + process.env.GITHUB_TOKEN;
  var res = yield get(uri);
  var e = res.body;
  if (!startAt) return _(e).reverse().__wrapped__;
  return _.dropRightWhile(e, function(n) {
    return moment(startAt).isAfter(n.created_at);
  }).reverse();
}
