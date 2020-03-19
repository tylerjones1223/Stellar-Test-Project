module.exports = function (db, sequelize) {
	return db.define('maintenanceRecords', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrememnt: true,
		field: 'id'
		},
		unitId: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'unit_id'
		},
		completedOn: {
			type: sequelize.DATE,
			allowNull: true,
			field: 'completed_on'
		},
		type: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'type'
		},
		customType: {
			type: sequelize.STRING,
			allowNull: true,
			field: 'custom_type'
		},
		dueAt: {
			type: sequelize.DATE,
			allowNull: true,
			field: 'due_at'
		},
		systemEngineHours: {
			type: sequelize.DECIMAL,
			allowNull: true,
			field: 'system_engine_hours'
		},
		actualEngineHours: {
			type: sequelize.DECIMAL,
			allowNull: true,
			field: 'actual_engine_hours'
		},
		engineHoursNextDue: {
			type: sequelize.DECIMAL,
			allowNull: true,
			field: 'engine_hours_next_due'
		},
		createdBy: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'created_by'
		},
		updatedBy: {
			type: sequelize.INTEGER,
			allowNull: true,
			field: 'updated_by'
		}
	}, {
		tableName: 'maintenance_records',
		timestamps: true,
		classMethods: {
			associate: function associateModel (models) {
				this.hasMany(models.maintenanceRecordNotes);
				this.hasMany(models.maintenanceRecordPictures);
			}
		}
	});
}