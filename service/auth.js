const jwt = require("jsonwebtoken")
const secret = "pankaj@ku3$a70$%2k81"

const getTokenForUser = (user)=>{
    return jwt.sign({
        _id: user._id,
        email:user.email
    }, secret)
}

const verifyTokenWithSecret = (token)=>{
    if(!token)
        return null;
    return jwt.verify(token, secret);
}

module.exports ={
    getTokenForUser, 
    verifyTokenWithSecret
}