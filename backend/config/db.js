import mongoose from "mongoose"

//a function to connect the database
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected.`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //process code 1 represents exit with failure, 0 means success.
    }
} 