'use strict';

function addMaintenanceRecordToScope (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var maintenanceRecord = req.params.maintenanceRecordId;
console.log(maintenanceRecord)
	MaintenanceRecords.findById(maintenanceRecord)
	.then(function (rec) {
		if (rec) {
			req.$scope.maintenanceRecord = rec;
			return next();
		}

		res.send(404, 'No Maintenance Record found.');
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get maintenance record.');

		res.send(500, error.message);
	});
}

module.exports = addMaintenanceRecordToScope;