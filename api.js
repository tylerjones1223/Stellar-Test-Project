'use strict';

var http = require('https');
var restify = require('restify');
var bunyan = require('bunyan');

var config = require(__dirname + '/config');
var log = bunyan.createLogger(config.appLog);
var handlers = require(__dirname + '/handlers');
var middleware = require(__dirname + '/middleware');
var models = require(__dirname + '/lib/db').models;

var app = restify.createServer({
  name: config.server.name,
  log: bunyan.createLogger(config.appLog)
});

app.use(restify.plugins.requestLogger());
app.use(restify.plugins.gzipResponse());
app.use(restify.plugins.bodyParser());
app.use(restify.plugins.queryParser());

app.use(function appLogger (req, res, next) {
  req.log = bunyan.createLogger(config.appLog);
  next();
});

app.use(function setupScope (req, res, next) {
  req.$scope = {};
  req.db = models;
  next();
});

app.use(function trafficLogger (req, res, next) {
  req.log.info({reqId: req._id}, 'HTTP Request');
  res.once('finish', function resLogger () {
    req.log.info({res: res.statusCode}, 'HTTP Response');
  });
  next();
});

app.on('uncaughtException', function (req, res, route, err) {
  req.log.fatal({
    route: route.name,
    err: {
      name: err.name,
      message: err.message,
      stack: err.stack
    }}, 'Uncaught Exception');

  res.send(err);
  process.exit(1);
});

app.get('/echo', function echo (req, res, next) {
  res.header('content-type', 'text/plain');
  res.send(200, 'Hello World\n');
  next();
});

app.get('/maintenanceRecords/:id',      middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_view'),
                                        handlers.maintenanceRecords.getMaintenanceRecord);

app.get('/maintenanceRecords',          middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_list'),
                                        handlers.maintenanceRecords.getMaintenanceRecords);

app.get('/maintenanceRecords/search',          middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_search'),
                                        handlers.maintenanceRecords.searchMaintenanceRecords);

app.get('/users',                       handlers.users.getUsers);

app.get('/roles',                       handlers.roles.getRoles);

app.post('/users',                      handlers.users.createUser);

app.post('/roles',                      handlers.roles.createRole);

app.post('/maintenanceRecords',         middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_add'),
                                        handlers.maintenanceRecords.createMaintenanceRecord);

app.post('/units/:maintenanceRecordId', middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_add'),
                                        middleware.addMaintenanceRecordToScope, 
                                        handlers.units.createUnit);

app.put('/maintenanceRecords/:id',      middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_update'),
                                        handlers.maintenanceRecords.updateMaintenanceRecords);

app.del('/maintenanceRecords/:id',      middleware.addUserToScope,
                                        middleware.permissionsGranter('maintenance_records_delete'),
                                        handlers.maintenanceRecords.deleteMaintenanceRecord)

module.exports = app;