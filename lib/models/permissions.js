module.exports = function (db, sequelize) {
	return db.define('permissions', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
		field: 'id'
		},
		name: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'permissions',
		timestamps: false,
		classMethods: {
			associate: function (models) {
				this.belongsToMany(models.roles, {
					as: 'roles',
					through: 'role_permissions',
					foreignKey: 'permission_id'
				});
			}
		}
	});
}