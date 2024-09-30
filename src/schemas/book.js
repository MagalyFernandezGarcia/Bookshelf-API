import mongoose from "mongoose";


export const bookSchema = new mongoose.Schema({
    title: String,
    serie: String,
    volume: Number,
    author: String,
    category: String,
    summary: String,
    finished: Boolean,
    opinion: Number,
    type: String,
    returned: Boolean,
    lent: Boolean,
    borrower: String
});
export const Books = mongoose.model("Books", bookSchema);