const fs = require('fs');
const path = require('path');

// const products = [];
const filePath = path.join(path.dirname(process.mainModule.filename),
'data',
'products.json');
function getProductsFromFile(cb) {

    
    fs.readFile(filePath,(err,content)=>{
        let products = [];
        if(err){
            return cb([]);
       }
       
       return cb(JSON.parse(content));
     
    });  
}
module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        getProductsFromFile((products)=>{
            products.push(this)
            fs.writeFile(filePath,JSON.stringify(products),(err) => {console.log(err)});
        });
    }


    static fetchAll(callBack){
         getProductsFromFile(callBack);       
    }

}