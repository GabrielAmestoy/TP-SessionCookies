module.exports = (req,res,next) =>{
    if(req.cookies.sessionesycookies){
        req.session.user = req.cookies.sessionesycookies;
    }
    next()
}