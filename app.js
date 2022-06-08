// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','pug');
app.set('views','views');//default 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));  //parser

app.use(express.static(path.join(__dirname,"public"))) // to use static paths
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//to catch 404 error
app.use(errorController.get404page);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000);



