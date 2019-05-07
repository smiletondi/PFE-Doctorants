const express= require("express");
const router= express.Router();
const secretaryController= require("../controller/secretary");

// page : /secretary/doctorant-list => GET
router.get('/doctorant-list', secretaryController.getDoctList );
// page : /secretary/doctorant-list => POST
router.post('/doctorant-list', secretaryController.postDocList );

// page : /secretary/add-doctor => GET
router.get('/add-doctor', secretaryController.getAddDoct );
// page : /secretary/add-doctor => POST
router.post('/add-doctor', secretaryController.postAddDoct );

// page : /secretary/doctorant-detail => GET
router.get('/doctorant-detail/:doctorantId', secretaryController.getDocDetail );

// page : /secretary/doctorant-detail/<%= doc.id %> => Post
router.post('/doctorant-detail', secretaryController.postDoctDetail);



// page : /secretary/encadrant-list => GET
router.get('/encadrant-list', secretaryController.getEncList );
// page : /secretary/encadrant-list => POST
router.post('/encadrant-list', secretaryController.postEncList );

// page : /secretary/add-encadrant => GET
router.get('/add-encadrant', secretaryController.getAddEnc );
// page : /secretary/add-encadrant => POST
router.post('/add-encadrant', secretaryController.postAddEnc );

// page : /secretary/encadrant-detail => POST
router.get('/encadrant-detail/:encadrantId', secretaryController.getEncDetail );
// page : /secretary/doctorant-detail/<%= doc.id %> => Post
router.post('/encadrant-detail', secretaryController.postEncDetail);



// page : /secretary/these-list => GET
router.get('/these-list', secretaryController.getTheseList );
// page : /secretary/these-list => POST
router.post('/these-list', secretaryController.postTheseList );

// page : /secretary/add-these => GET
router.get('/add-these', secretaryController.getAddThese );
// page : /secretary/add-thse => POST
router.post('/add-these', secretaryController.postAddThese );


module.exports=router;