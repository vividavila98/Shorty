import mongoose from "mongoose";

// Create a model schema for URL resource
const urlSchema = new mongoose.Schema({
    urlCode: String,
    originalUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now}
});

export const Url = mongoose.model("Url", urlSchema);