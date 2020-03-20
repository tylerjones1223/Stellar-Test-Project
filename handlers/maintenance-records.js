'use strict';

function createMaintenanceRecord (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var maintenanceRecord = req.body;
	maintenanceRecord.createdBy = req.$scope.user.id;

	MaintenanceRecords.create(maintenanceRecord)
	.then(function (rec) {
		return rec.addMaintenanceTypes(maintenanceRecord.type)
		.then(function () {
			res.send(201, rec);

			return next();
		});
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to create new maintenance record.');

		res.send(500, error.message);
	});
}

function getMaintenanceRecord (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var maintenanceRecord = req.params.id;

	MaintenanceRecords.findById(maintenanceRecord)
	.then (function (rec) {
		res.send(200, rec);

		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get maintenance record.');

		res.send(500, error.message);
	});
}

function getMaintenanceRecords (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;

	MaintenanceRecords.findAll()
	.then (function (rec) {
		res.send(200, rec);

		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get maintenance records.');

		res.send(500, error.message);
	});
}

function searchMaintenanceRecords (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var searchParams = JSON.parse(req.body);

	MaintenanceRecords.findAll({
		where: searchParams
	})
	.then (function (rec) {
		res.send(200, rec);

		return next();
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to get maintenance records.');

		res.send(500, error.message);
	});
}

function updateMaintenanceRecords (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var maintenanceRecord = req.body;
	var maintenanceRecordId = req.params.id;
	maintenanceRecord.updatedBy = req.$scope.user.id;

	MaintenanceRecords.update(maintenanceRecord, {
		where: {
			id: maintenanceRecordId
		},
		fields: [
			'completedAt',
			'type',
			'customType',
			'dueAt',
			'actualEngineHours',
			'engineHoursNextDue',
			'updatedBy'
		]
	})
	.then(function (rec) {
		if (rec[0]) {
			res.send(204);

			return next();
		}

		res.send(404, 'No record found');
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to update maintenance record.');

		res.send(500, error.message);
	});
}

function deleteMaintenanceRecord (req, res, next) {
	var MaintenanceRecords = req.db.maintenanceRecords;
	var maintenanceRecordId = req.params.id;

	MaintenanceRecords.destroy({
		where: {
			id: maintenanceRecordId
		}
	})
	.then(function (rec) {
		if (rec) {
			res.send(204, 'Maintenance Record Deleted.');

			return next();
		}

		res.send(404, 'No record found');
	})
	.catch(function (error) {
		req.log.error({
			err: error
		}, 'Failed to update maintenance record.');

		res.send(500, error.message);
	});
}

module.exports.createMaintenanceRecord = createMaintenanceRecord;
module.exports.getMaintenanceRecord = getMaintenanceRecord;
module.exports.getMaintenanceRecords = getMaintenanceRecords;
module.exports.searchMaintenanceRecords = searchMaintenanceRecords;
module.exports.updateMaintenanceRecords = updateMaintenanceRecords;
module.exports.deleteMaintenanceRecord = deleteMaintenanceRecord;