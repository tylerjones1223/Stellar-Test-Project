module.exports = function (db, sequelize) {
	return db.define('users', {
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
		email: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'email'
		},
		password: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'password'
		},
		apiToken: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'api_token'
		}
	}, {
		tableName: 'users',
		timestamps: true,
		classMethods: {
			associate: function (models) {
				this.belongsToMany(models.roles, {
					as: 'roles',
					through: 'user_roles',
					foreignKey: 'role_id'
				});
			}
		}
	});
}