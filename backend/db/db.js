const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is missing in the environment");
        }

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectdb;
