'use strict';

function createUnit (req, res, next) {
	var Units = req.db.units;
	var unit = req.body;
	var maintenanceRecord = req.$scope.maintenanceRecord;

	maintenanceRecord.createUnit(unit)
	.then(function (rec) {
		res.send(201, rec);

		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to create new unit.');

		res.send(500, error.message);
	});
}

module.exports.createUnit = createUnit;