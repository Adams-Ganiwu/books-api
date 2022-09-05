function logger(req, res, next) {
    console.log(`${req, method} ${req.originalurl} ${req.stattusCode}`)
    
    next();
}

module.exports=logger