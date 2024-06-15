const express = require("express")
const connectDB = require("./db/index.js")

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
