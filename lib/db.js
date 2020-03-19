'use strict';

var Sequelize = require('sequelize');
var config = require(__dirname + '/../config').db;
var models = require(__dirname + '/models');

var db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.adapter,
  dialectOptions: config.dialectOptions,
  pool: config.pool,
  maxConcurrentQueries: config.maxConcurrentQueries,
  logging: config.logging
});

db.sync();

for (var modelName in models) {
	models[modelName](db, Sequelize);
}

for (var model in db.models) {
  if (typeof db.models[model].associate === 'function') {
    db.models[model].associate(db.models);
  }
}

module.exports = db;