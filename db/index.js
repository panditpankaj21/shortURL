const mongoose = require("mongoose")


const connectDB = async (path)=>{
    try {
        const connectionInstance = await mongoose.connect(path);
        console.log(`MongoDB is connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`mongoDB connectoin error: ${error}`);  
    }
}

module.exports = connectDB