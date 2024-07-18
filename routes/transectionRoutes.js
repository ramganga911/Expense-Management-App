const express = require("express");
const { addTransection, getAlltransection ,editTransection,deleteTransection} = require("../controllers/transectionCtrl");


//router object
const router = express.Router();

//routers
// add transection POST method
router.post("/add-transection", addTransection);

// Edit transection POST method
router.post("/edit-transection", editTransection);

// Delete transection POST method
router.post("/delete-transection", deleteTransection);


//get trasection
router.post('/get-transection', getAlltransection)

module.exports = router;