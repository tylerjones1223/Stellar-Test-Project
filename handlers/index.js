var ls = require('fs').readdirSync;
var cwd = module.filename.split('/').slice(0,-1).join('/');
var files = ls(cwd).filter(function (fd) {
  var parts = fd.split('.');

  if (fd.charAt(0) === '#'
                  || fd.charAt(0) === '.'
                  || fd === 'index.js') {
    return false;
  } if (parts.length > 1
                    && parts[parts.length - 1].substr(0,2) !== 'js') {
    return false;
  }else {
    return true;
  }
});

files.forEach(function (fd) {
    // Remove .js & .json
  fd = fd.split('.')[0];

    // Turn-hyphens into camelCase
  var words = fd.match(/\w+/gi);
  var name = words.shift();
  var _cur;
  while ( (_cur = words.shift()) ) {
    _cur = _cur[0].toUpperCase() + _cur.substr(1);
    name += _cur;
  }

  module.exports[name] = require('./' + fd);
});