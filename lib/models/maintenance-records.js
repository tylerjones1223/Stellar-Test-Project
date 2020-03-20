module.exports = function (db, sequelize) {
	return db.define('maintenanceRecords', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
		field: 'id'
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
			type: sequelize.DECIMAL(10, 2),
			allowNull: true,
			field: 'system_engine_hours'
		},
		actualEngineHours: {
			type: sequelize.DECIMAL(10, 2),
			allowNull: true,
			field: 'actual_engine_hours'
		},
		engineHoursNextDue: {
			type: sequelize.DECIMAL(10, 2),
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
				this.hasMany(models.units);
				this.belongsToMany(models.maintenanceTypes, {
					as: 'maintenanceTypes',
					through: 'maintenance_record_types',
					foreignKey: 'maintenance_record_id'
				});
			},
			addScopes: function () {
				this.addScope('defaultScope', {
					include: [
						{
							association: this.associations.maintenanceRecordNotes,
							attributes: ['id', 'note'],
							required: false
						},
						{
							association: this.associations.maintenanceRecordPictures,
							attributes: ['id', 'url', 'caption'],
							required: false
						},
						{
							association: this.associations.units,
							attributes: ['id', 'name', 'engine_hours', 'position'],
							where: {
								status: 1
							},
							order: [
								['position', 'ASC']
							],
							required: false
						},
						{
							association: this.associations.maintenanceTypes,
							attributes: ['id', 'name', 'position'],
							where: {
								status: 1
							},
							order: [
								['position', 'ASC']
							],
							required: false
						}
					]
				}, {override: true});
			}
		}
	});
}