var util = require('util');
var copy = util._extend;

module.exports = deepCopy;
function deepCopy (proto, overwrites, append) {
  // We can't deep copy things like Bunyan log instances. 
  if (overwrites.constructor !== Object) {
    return overwrites;
  }
  
  if (append) {
    return deepCopyAppend(proto, overwrites);
  }
  var defaults = copy({}, proto);
  if (!defaults) defaults = {};
  
  for (var prop in overwrites) {
    if (!util.isPrimitive(overwrites[prop])) {
      if (!Array.isArray(overwrites[prop])) {
        overwrites[prop] = deepCopy(defaults[prop], overwrites[prop]);
      }
    }
    defaults[prop] = overwrites[prop];
  }
  return defaults;
}

function deepCopyAppend (proto, overwrites) {
  var defaults = copy({}, proto);
  if (!defaults) defaults = {};
  
  for (var prop in overwrites) {
    if (!util.isPrimitive(overwrites[prop])) {
      if (Array.isArray(overwrites[prop])) {
        if(!Array.isArray(defaults[prop])) {
          defaults[prop] = [];
        }
        overwrites[prop] = defaults[prop].concat(overwrites[prop]);
      } else {
        overwrites[prop] = deepCopyAppend(defaults[prop], overwrites[prop]);
      }
    }
    defaults[prop] = overwrites[prop];
  }
  return defaults;
}