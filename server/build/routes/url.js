"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Our POST route to be able to create a short URL & insert into DB
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router(); //middleware to use app.use()
const valid_url_1 = __importDefault(require("valid-url"));
const shortid_1 = __importDefault(require("shortid"));
const config_1 = __importDefault(require("config"));
const url_1 = require("../models/url"); // schema for URLs
// @route   POST  request to /api/url/shorten endpoint
// @desc    Create short URL
// Don't need /api/url bc it's connected in app.ts
router.post("/shorten", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // In req.body, we're gonna send the original URL data with the request
    const { originalUrl } = req.body;
    const baseUrl = config_1.default.get("baseUrl");
    // Check if baseURl is not valid 
    if (!valid_url_1.default.isUri(baseUrl)) {
        return res.status(401).json("Invalid base URL");
    }
    // Create URl code
    const urlCode = shortid_1.default.generate();
    console.log(`urlcode in url.ts: ${urlCode}`);
    // Check if originalUrl is valid
    if (valid_url_1.default.isUri(originalUrl)) {
        // If it's valid, check in DB to see if url is already there
        try {
            // use model method: findOne
            let url = yield url_1.UrlModel.findOne({ originalUrl });
            // if url is in db, send url object which will have the db fields
            if (url) {
                res.json(url);
            }
            else {
                // if not, construct short URL
                // localhost/8000 + / + shortid code
                const shortUrl = baseUrl + "/" + urlCode;
                console.log(`short url in url.ts: ${shortUrl}`);
                // insert url into db following schema model
                // create instance of this new url object
                url = new url_1.UrlModel({
                    originalUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                // save into db
                // save() returns a promise
                yield url.save();
                // return url object as json 
                res.json(url);
            }
        }
        catch (err) {
            console.error(err);
            console.log("in url.ts");
            res.status(500).json("Server error probably");
        }
    }
    else {
        // if the originalUrl is not valid
        res.status(401).json("Invalid original Url");
    }
}));
module.exports = router;
