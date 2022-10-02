var express = require('express');
var router = express.Router();
var data = require('../data/mhs.json')


router.get('/', function(req, res) {
    res.json({
      data: data,
    });
});

router.get('/:nim', function(req, res) {
  const {nim} = req.params

  const dataa = data.filter((n) => n.nim === nim);

  if (dataa !== undefined) {
    res.status(200).json({
      status: "success",
      dataa,
    });
  } else {
    res.status(404).json({
      message: "Tidak ditemukan!",
    });
  }
});

module.exports = router;
