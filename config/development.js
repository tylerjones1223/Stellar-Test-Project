
'use strict';

var defaults = require(__dirname + '/defaults');
var deepCopy = require(__dirname + '/deep-copy');
var openFile = require('fs').createWriteStream;
var sqlLog = openFile(__dirname + '/../log/sql.log',
                      { defaultEncoding: 'utf8', flags: 'a'});
var sprintf = require('util').format;

module.exports = deepCopy(defaults, {
  db: {
    database: 'stellar_test_project_dev',
    adapter: 'mysql',
    host: 'localhost',
    user: 'root',
    password: '',
    logging: function (s) {
      var line = sprintf('[%s] %s\n', new Date().toJSON(), s);
      sqlLog.write(line);
    }
  }
});