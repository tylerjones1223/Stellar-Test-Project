'use strict';

var crypto = require(__dirname + '/../lib/crypto');

function createUser (req, res, next) {
	var Users = req.db.users;
	var user = req.body.user;
	var role = req.body.role;

	user.password = crypto(user.password);

	Users.create(user)
	.then(function (rec) {
		return rec.setRoles(role)
		.then(function () {
			res.send(201, {apitoken: rec.apiToken});

			return next();
		});
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to create new user.');

		res.send(500, error.message);
	});
}

function getUsers (req, res, next) {
	var Users = req.db.users;

	Users.findAll()
	.then(function (rec) {
		res.send(200, rec)
		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get users.');

		res.send(500, error.message);
	})
}

module.exports.createUser = createUser;
module.exports.getUsers = getUsers;