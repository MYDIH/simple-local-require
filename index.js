const path = require('path')

module.exports = function (from) {
  var Module = require('module')
  const original = Module.prototype.require

  Module.prototype.require = function () {
    try {
      return original.apply(this, arguments)
    } catch (err) {
      arguments[0] = path.join(global.APP_DIR, arguments[0])
      return original.apply(this, arguments)
    }
  }
}
