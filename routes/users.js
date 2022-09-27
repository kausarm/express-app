var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
      data: [
        {
          name: "kausar",
          nim: 1957301007,
          kelas: "TI 4B",
        },
        {
          name: "halim",
          nim: 1957301008,
          kelas: "TI 4B",
        },
      ],
    });
});

module.exports = router;
