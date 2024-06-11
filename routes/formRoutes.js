const express = require("express");
const router = express.Router();
const formController = require('../controller/form_controller');
// const attentaction =require("../attentication/form_attentaction")

router.post('/', formController.sign_up);
router.post("/sign_up",formController.form_data);

// attentaction.form_data, 
module.exports = router;
