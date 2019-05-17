var express = require('express');
var router = express.Router();
const loginController= require("../controller/login");

// Login page
router.get('/', loginController.getLogin);
router.post('/', loginController.postLogin);

router.post('/logout', loginController.postLogout);


module.exports = router;
