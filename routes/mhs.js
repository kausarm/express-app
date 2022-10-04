express = require("express");
var router = express.Router();
var dataMhs = require("../data/mhs.json");

router.get("/", function (req, res) {
  res.json({
    data: dataMhs,
  });
});

router.get("/:nim", function (req, res) {
  const { nim } = req.params;

  const data = dataMhs.filter((n) => n.nim === nim)[0];
  if (data !== undefined) {
    res.status(200).json({
      message:"success",
      data,
    })
  } else {
    res.status(404).json({
      message: "Tidak ditemukan!",
    });
  }
});

module.exports = router;