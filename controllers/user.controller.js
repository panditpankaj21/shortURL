const User = require("../models/user.model.js")
const { v4: uuidv4 } = require('uuid');
const {getTokenForUser} = require('../service/auth.js')

const userSignUp = async (req, res) => {
    const {name, email, passward} = req.body;
    if(!name || !email || !passward){
        console.log("all fields are required")

    }

    const newUser = await User.create({
        name,
        email, 
        passward
    })

    return res.redirect("/")
}

const userLogin = async (req, res) => {
    const {email, passward} = req.body;
    const user = await User.findOne({email, passward});
    if(!user){
        return res.render("login", {
            error: "invalid email and passward"
        });
    }

    const token = getTokenForUser(user);
    res.cookie("uid", token);
    return res.redirect("/")
}

module.exports = {
    userSignUp,
    userLogin,

}