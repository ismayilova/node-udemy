exports.get404page = (req,res,next)=>{
    res.status(404)
    .render('404')
    //.sendFile(path.join(__dirname,'views','404.html'));

}