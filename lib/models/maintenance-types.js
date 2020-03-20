module.exports = function (db, sequelize) {
	return db.define('maintenanceTypes', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
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
		position: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'position'
		}
	}, {
		tableName: 'maintenance_types',
		timestamps: true,
		classMethods: {
			associate: function (models) {
				this.belongsToMany(models.maintenanceRecords, {
					as: 'maintenanceRecords',
					through: 'maintenance_record_types',
					foreignKey: 'maintenance_type_id'
				});
			}
		}
	});
}