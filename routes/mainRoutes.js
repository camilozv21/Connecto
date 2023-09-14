const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController');
// const multer = require('multer');
// const path = require('path');
// const validations = require('../middlewares/productValidation');

// @GET /products/cart 
router.get('/', mainController.getIndex)

module.exports = router;