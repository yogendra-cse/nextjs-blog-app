import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "blogdb-next-app",
         
        });

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
