module.exports = function (db, sequelize) {
	return db.define('units', {
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
		engineHours: {
			type: sequelize.DECIMAL,
			allowNull: false,
			field: 'engine_hours'
		},
		position: {
			type: sequelize.DECIMAL,
			allowNull: false,
			field: 'position'
		}
	}, {
		tableName: 'units',
		timestamps: true,
		classMethods: {
			associate: function associateModel (models) {
				this.hasMany(models.maintenanceRecords);
			}
		}
	});
}