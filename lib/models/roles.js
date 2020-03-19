module.exports = function (db, sequelize) {
	return db.define('roles', {
		id: {
		type: sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		allowNull: false,
		autoIncrememnt: true,
		field: 'id'
		},
		name: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'roles',
		timestamps: false,
		classMethods: {
			associate: function (models) {
				this.belongsToMany(models.users, {
					as: 'users',
					through: 'user_roles',
					foreignKey: 'user_id'
				});

				this.belongsToMany(models.permissions, {
					as: 'permissions',
					through: 'role_permissions',
					foreignKey: 'permission_id'
				});
			}
		}
	});
}