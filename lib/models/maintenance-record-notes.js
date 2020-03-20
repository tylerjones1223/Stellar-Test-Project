module.exports = function (db, sequelize) {
	return db.define('maintenanceRecordNotes', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
		field: 'id'
		},
		note: {
			type: sequelize.TEXT,
			allowNull: false,
			field: 'note'
		},
		createdBy: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'created_by'
		}
	}, {
		tableName: 'maintenance_record_notes',
		timestamps: true,
		classMethods: {}
	});
}