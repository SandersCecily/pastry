var orm = require ("../config/orm.js");

var pastry = {
    all: function(cb) {
        orm.all("shelf", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.create("shelf", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("shelf", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("shelf", condition, function(res) {
          cb(res);
        });
      }
};

module.exports = pastry;