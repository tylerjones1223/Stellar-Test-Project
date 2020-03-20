module.exports = function (db, sequelize) {
	return db.define('maintenanceRecordPictures', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
		field: 'id'
		},
		url: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'url'
		},
		caption: {
			type: sequelize.TEXT,
			allowNull: false,
			field: 'caption'
		},
		createdBy: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'created_by'
		}
	}, {
		tableName: 'maintenance_record_pictures',
		timestamps: true,
		classMethods: {}
	});
}