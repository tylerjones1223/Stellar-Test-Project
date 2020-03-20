'use strict';

function permissionGranter (perm) {
	return function (req, res, next) {
		var permissions = req.$scope.user.permissions;
		var permitted = permissions.includes(perm);

		if (permitted) {
			return next()
		}

		res.send(403, 'Wrong permissions.');
	}
}

module.exports = permissionGranter;