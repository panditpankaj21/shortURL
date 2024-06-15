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
    })

    return res.status(200).json({id: shortID});
}

module.exports = {
    generateNewShortURL,
}