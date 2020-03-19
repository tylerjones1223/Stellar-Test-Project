module.exports = function (db, sequelize) {
	return db.define('maintenanceTypes', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrememnt: true,
		field: 'id'
		},
		status: {
			type: sequelize.BOOLEAN,
			allowNull: false,
			field: 'status'
		},
		name: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'name'
		},
		createdBy: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'created_by'
		}
	}, {
		tableName: 'maintenance_types',
		timestamps: true,
		classMethods: {}
	});
}