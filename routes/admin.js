var express = require('express');
var router = express.Router();
const adminController= require("../controller/admin");
const isAuth= require('../util/isAuth');

// page : admin/add-secretary => GET
router.get('/add-secretary', isAuth, adminController.getAddSecretary);
// page : admin/add-secretary => POST
router.post('/add-secretary', isAuth, adminController.postAddSecretary);

// page : admin/add-secretary => GET
router.get('/secretary-list', isAuth, adminController.getSecretaryList);

// page : admin/delete-secretary => POST
router.post('/delete-secretary', isAuth, adminController.postDeleteSecretary);


module.exports = router;
