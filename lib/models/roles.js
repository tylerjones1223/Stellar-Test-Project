module.exports = function (db, sequelize) {
	return db.define('roles', {
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
			unique: true,
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
					foreignKey: 'role_id'
				});
			},
			addScopes: function () {
				this.addScope('defaultScope', {
					include: [
						{
							association: this.associations.permissions,
							attributes: ['id', 'name'],
							required: false
						}
					]
				}, {override: true});
			}
		}
	});
}