
import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test", {
            
        });
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
}

export async function bookshelf() {
    await connectToDatabase();


}


