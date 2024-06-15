const express = require("express")
const connectDB = require("./db/index.js")
const urlRoute = require("./routes/url.route.js")
const URL = require("./models/url.model.js")
const path = require("path")
const staticRouter = require("./routes/staticRouter.route.js")

const app = express();
const PORT = 8000;


connectDB("mongodb://127.0.0.1:27017/short-url")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection Failed!!", err)
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false})); // for form data

app.get("/website/:shortID", async (req, res)=>{
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, { $push:{
        visitedHistory: {
            timestamps: Date.now()
        }
    }})
    res.redirect(entry.originalURL);
})

app.use("/", staticRouter)

app.use("/url", urlRoute)