
import mongoose from "mongoose";
import { DB_NAME } from "../../constante.js";

const connectDB = async() => {
    try {
        const connectionINFO = await mongoose.connect(`${process.env.MONGOODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionINFO.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB connection Error; ${error}`);
        process.exit(1); // Exit process with failure
        
    }
}

export default connectDB;