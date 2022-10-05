var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(
    { 
      nama:"Muhammad Kausar",
      nim:"1957301007"
    }
  );
});

module.exports = router;
