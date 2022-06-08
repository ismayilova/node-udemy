const express = require('express');
const path = require('path');
// const rootDir = require('../util/path');
const productsController = require('../controllers/products')
const router = express.Router();


router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);

// exports.routes = router;
module.exports = router;
// module.exports.products = products;