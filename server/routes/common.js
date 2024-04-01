const express = require('express');
const router = express.Router()
const commonController = require('../controllers/commonController');


router.get("/",commonController.Home);

module.exports = router;



