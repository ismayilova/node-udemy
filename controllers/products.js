const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product'); 

    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
};

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title)

    console.log(product);
    product.save();
    // products.push({ title: req.body.title });
    // console.log(body);
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    console.log('Shop.js ',products);
     //    res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop',{prods: products, docTitle:'Shop'}); 
 };