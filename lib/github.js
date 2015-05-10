
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
  var res = yield get('https://api.github.com/users/20percentclub/received_events/public?access_token=c0d8aecb072a0be5394cd311df5a4201629f4080');
  var e = res.body;
  if (!startAt) return _(e).reverse().__wrapped__;
  return _.dropRightWhile(e, function(n) {
    return moment(startAt).isAfter(n.created_at);
  }).reverse();
}
