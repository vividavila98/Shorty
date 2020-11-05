import mongoose, {Schema, Document } from "mongoose";

export interface IUrl extends Document {
    urlCode: string;
    originalUrl: string;
    shortUrl: string;
    date: string;
}

// Create a model schema for URL resource
const urlSchema = new Schema({
    urlCode: String,
    originalUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now}
});

//export const Url = mongoose.model("Url", urlSchema);
//export default mongoose.model<IUrl>("Url", urlSchema)

// Export model and return IUrl interface
export const UrlModel = mongoose.model<IUrl>("Url", urlSchema);