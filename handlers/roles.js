'use strict';

function createRole (req, res, next) {
	var Roles = req.db.roles;
	var role = req.body.role;
	var permissions = req.body.permissions;

	Roles.create(role)
	.then(function (createdRole) {
		return createdRole.addPermissions(permissions)
		.then(function () {
			res.send(201, 'Created!');

			return next();
		})
		.catch(function (error) {
			req.log.error({
				err: error
			}, 'Failed to associate permission');

			res.send(500, error.message);
		});
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to create new role.');

		res.send(500, error.message);
	});
}

function getRoles (req, res, next) {
	var Roles = req.db.roles;

	Roles.findAll()
	.then(function (rec) {
		res.send(200, rec);

		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to create new role.');

		res.send(500, error.message);
	});
}

module.exports.createRole = createRole;
module.exports.getRoles = getRoles;