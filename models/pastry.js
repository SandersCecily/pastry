var orm = require ("../config/orm.js");

var pastry = {
    all: function(cb) {
        orm.all("shelf", function(res) {
          cb(res);
        });
      },
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
};

module.exports = pastry;