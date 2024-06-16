const {verifyTokenWithSecret} = require("../service/auth.js")

async function restrictToLoggedinUserOnly(req, res, next){
    const userUid = req.cookies?.uid;

    if(!userUid){
        return res.redirect('/login')
    }

    const user = verifyTokenWithSecret(userUid)
    if(!user){
        return res.redirect("/login")
    }

    req.user = user;
    next();
}

async function checkAuth(req, res, next){
    const userUid = req.cookies?.uid;

    const user = verifyTokenWithSecret(userUid)

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}