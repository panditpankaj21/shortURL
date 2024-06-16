const {nanoid} = require("nanoid")
const URL = require("../models/url.model.js")

const generateNewShortURL = async(req, res)=>{
    const {url}  = req.body
    if(!url){
        return res.status(400).json({error: "url is required"})
    }
    const shortID = nanoid(8);
    await URL.create({
        shortID: shortID,
        originalURL: url,
        visitedHistory: [],
        createdBy: req.user._id,
    })

    return res.render("home", {
        shortID: shortID    
    });
}

const getAnalytics = async (req, res)=>{
    const shortID = req.params.shortID;
    const result = await URL.findOne({shortID});
    return res.json({
        totalClick : result.visitedHistory.length,
        visitedHistory: result.visitedHistory,
    })
}

module.exports = {
    generateNewShortURL,
    getAnalytics,
}