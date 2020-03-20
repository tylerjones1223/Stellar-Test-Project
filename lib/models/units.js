module.exports = function (db, sequelize) {
	return db.define('units', {
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
		engineHours: {
			type: sequelize.DECIMAL(10, 2),
			allowNull: false,
			field: 'engine_hours'
		},
		position: {
			type: sequelize.INTEGER,
			allowNull: false,
			field: 'position'
		}
	}, {
		tableName: 'units',
		timestamps: true,
		classMethods: {}
	});
}