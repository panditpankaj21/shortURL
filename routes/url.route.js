const express = require("express")
const {
    generateNewShortURL,
    getAnalytics,
} = require("../controllers/url.controller.js")

const router = express.Router();

router.post("/", generateNewShortURL);

router.get("/analytics/:shortID", getAnalytics);

module.exports = router;