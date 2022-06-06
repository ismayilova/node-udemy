const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');
6
const router = express.Router();


router.get('/',(req, res, next)=>{
   console.log('Shop.js ',adminData.products);
//    res.sendFile(path.join(rootDir,'views','shop.html'));
   res.render('shop',{prods: adminData.products, docTitle:'Shop'}); 
});

module.exports = router