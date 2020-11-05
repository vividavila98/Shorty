"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Create a model schema for URL resource
const urlSchema = new mongoose_1.Schema({
    urlCode: String,
    originalUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now }
});
//export const Url = mongoose.model("Url", urlSchema);
//export default mongoose.model<IUrl>("Url", urlSchema)
// Export model and return IUrl interface
exports.UrlModel = mongoose_1.default.model("Url", urlSchema);
