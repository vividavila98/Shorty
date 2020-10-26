// Our POST route to be able to create a short URL & insert into DB
import express from "express";
const router = express.Router(); //middleware to use app.use()
import validUrl from "valid-url";
import shortid from "shortid";
import config from "config";

import { Url } from "../models/url"; // schema for URLs

// @route   POST  request to /api/url/shorten endpoint
// @desc    Create short URL

// Don't need /api/url bc it's connected in app.ts
router.post("/shorten", async (req: express.Request, res: express.Response) => {
    // In req.body, we're gonna send the original URL data with the request
    const { originalUrl } = req.body; 
    const baseUrl:string = config.get("baseUrl");

    // Check if baseURl is not valid 
    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base URL");
    }

    // Create URl code
    const urlCode:string = shortid.generate();

    // Check if originalUrl is valid
    if(validUrl.isUri(originalUrl)) {
        // If it's valid, check in DB to see if url is already there
        try {
            // use model method: findOne
            let url = await Url.findOne({ originalUrl });

            // if url is in db, send url object which will have the db fields
            if(url) {
                res.json(url);
            } else {
                // if not, construct short URL
                // localhost/8000 + / + shortid code
                const shortUrl: string = baseUrl + "/" + urlCode;

                // insert url into db following schema model
                // create instance of this new url object
                 url = new Url({
                     originalUrl,
                     shortUrl,
                     urlCode,
                     date: new Date()
                 });
                 // save into db
                 // save() returns a promise
                 await url.save();

                 // return url object as json 
                 res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json("Server error probably");
        }
    } else {
        // if the originalUrl is not valid
        res.status(401).json("Invalid original Url");
    }

});

module.exports = router;