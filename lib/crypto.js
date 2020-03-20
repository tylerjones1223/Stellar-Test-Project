'use strict';

var crypto = require('crypto');
var path = require('path');
var config = require(path.resolve(__dirname, '..', 'config'));

function saltAndHashPassword (str) {
	return crypto.createHash('sha512')
		.update(str + config.salt)
		.digest('hex');
}

module.exports = saltAndHashPassword;