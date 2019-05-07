var express = require('express');
var router = express.Router();
const indexController= require("../controller/index");

/* GET home page. */
router.get('/', indexController.getIndex);
router.post('/', indexController.postIndex);


module.exports = router;
