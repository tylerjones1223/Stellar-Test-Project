'use strict';

function addUserToScope (req, res, next) {
	var User = req.db.users;
	var token = req.headers.apitoken;

	User.findOne({
		where: {
			apiToken: token
		}
	})
	.then(function (rec) {
		if (rec) {
			var permissions = rec.roles[0].permissions.map(function (i) {
				return i.name;
			});

			req.$scope.user = {
				id: rec.id,
				role: rec.roles[0].name,
				permissions: permissions
			};

			return next()
		}

		res.send(404, 'User not found.');
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get user.');

		res.send(500, error.message);
	});
}

module.exports = addUserToScope;