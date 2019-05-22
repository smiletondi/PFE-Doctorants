const express= require("express");
const router= express.Router();
const secretaryController= require("../controller/secretary");
const isAuth= require('../util/isAuth');

// page : /secretary/doctorant-list => GET
router.get('/doctorant-list', isAuth, secretaryController.getDoctList );
// page : /secretary/doctorant-list => POST
router.post('/doctorant-list', isAuth, secretaryController.postDocList );

// page : /secretary/add-doctor => GET
router.get('/add-doctor', isAuth, secretaryController.getAddDoct );
// page : /secretary/add-doctor => POST
router.post('/add-doctor', isAuth, secretaryController.postAddDoct );

// page : /secretary/doctorant-detail => GET
router.get('/doctorant-detail/:doctorantId', isAuth, secretaryController.getDocDetail );

// page : /secretary/doctorant-detail/<%= doc.id %> => Post
router.post('/doctorant-detail', isAuth, secretaryController.postDoctDetail);



// page : /secretary/encadrant-list => GET
router.get('/encadrant-list', isAuth, secretaryController.getEncList );
// page : /secretary/encadrant-list => POST
router.post('/encadrant-list', isAuth, secretaryController.postEncList );

// page : /secretary/add-encadrant => GET
router.get('/add-encadrant', isAuth, secretaryController.getAddEnc );
// page : /secretary/add-encadrant => POST
router.post('/add-encadrant', isAuth, secretaryController.postAddEnc );

// page : /secretary/encadrant-detail => POST
router.get('/encadrant-detail/:encadrantId', isAuth, secretaryController.getEncDetail );
// page : /secretary/doctorant-detail/<%= doc.id %> => Post
router.post('/encadrant-detail', isAuth, secretaryController.postEncDetail);



// page : /secretary/these-list => GET
router.get('/these-list', isAuth, secretaryController.getTheseList );
// page : /secretary/these-list => POST
router.post('/these-list', isAuth, secretaryController.postTheseList );

// page : /secretary/add-these => GET
router.get('/add-these', isAuth, secretaryController.getAddThese );
// page : /secretary/add-thse => POST
router.post('/add-these', isAuth, secretaryController.postAddThese );


module.exports=router;