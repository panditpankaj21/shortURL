const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortID:{
        type: String,
        required : true,
        unique: true,
    },
    originalURL:{
        type: String, 
        required: true,
    },
    visitedHistory: [{timestamps: {type: Number}}] 
    // array of objects
}, {timestamps: true})

const URL = mongoose.model("url", urlSchema);
module.exports = URL