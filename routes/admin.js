const express = require('express');
const path = require('path');

const router = express.Router();



router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/add-product',(req, res, next)=>{
    const body = req.body
    console.log(body);
    res.redirect('/');
});

module.exports = router