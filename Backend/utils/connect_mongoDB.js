import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const dbURL = process.env.VITE_PORT

        const options = '';

        await mongoose.connect(dbURL, options);
        console.log("MongoDB Connected...");

    } catch (err) {
        console.error(err);
    }
}

export default connectDB;