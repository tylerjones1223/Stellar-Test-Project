module.exports = function (db, sequelize) {
	return db.define('users', {
		id: {
			type: sequelize.INTEGER.UNSIGNED,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			field: 'id'
		},
		status: {
			type: sequelize.BOOLEAN,
			defaultValue: 1,
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
			unique: true,
			field: 'email'
		},
		password: {
			type: sequelize.STRING,
			allowNull: false,
			field: 'password'
		},
		apiToken: {
			type: sequelize.UUID,
			allowNull: false,
			defaultValue: sequelize.UUIDV4,
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
			},
			addScopes: function () {
				this.addScope('defaultScope', {
					include: [
						{
							association: this.associations.roles,
							attributes: ['id', 'name'],
							required: false
						}
					]
				}, {override: true});
			}
		}
	});
}