var express = require('express');
var router = express.Router();
const adminController= require("../controller/admin");

// page : admin/add-secretary => GET
router.get('/add-secretary', adminController.getAddSecretary);
// page : admin/add-secretary => POST
router.post('/add-secretary', adminController.postAddSecretary);

// page : admin/add-secretary => GET
router.get('/secretary-list', adminController.getSecretaryList);

// page : admin/delete-secretary => POST
router.post('/delete-secretary', adminController.postDeleteSecretary);


module.exports = router;
