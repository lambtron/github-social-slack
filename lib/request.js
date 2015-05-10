
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Thunkified post.
 */

exports.post = function(uri, body) {
  return function(fn) {
    request
      .post(uri)
      .send(body)
      .end(fn);
  };
};

/**
 * Thunkified get.
 */

exports.get = function(uri) {
  return function(fn) {
    request
      .get(uri)
      .end(fn);
  };
};
