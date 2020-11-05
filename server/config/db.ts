import mongoose from "mongoose";
process.env.NODE_CONFIG_DIR = './';
import config from "config";

// use config package to grab global variables from default.json
const db: string = config.get("mongoURI"); 

// connect to our database
// mongoose methods return a promise
export const connectDB = async () => {
    // try to connect to db using mongoose.connect
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected!")
        // if something goes wrong, print error message
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

// module.exports = connectDB;