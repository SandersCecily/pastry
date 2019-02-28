var express = require("express");
var router = express.Router();
var pastry = require("../models/pastry.js");

router.get("/", function(req, res) {
  pastry.all(function(data) {
    var hbsObject = {
      shelf: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/shelf", function(req, res) {
  pastry.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/shelf/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pastry.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/shelf/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pastry.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
