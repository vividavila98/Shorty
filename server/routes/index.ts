// Have the short URLs redirect to the original URLs
import express, {Request, Response} from "express";
const router = express.Router(); //middleware to use app.use()

import { UrlModel } from "../models/url";

// @route     GET /:code
// @desc      Redirect to original Url 
// /:code is a parameter/placeholder
router.get("/:code", async (req: Request, res: Response) => {
    try {
        // Find url object in db by the code set as a parameter in request
        const url = await UrlModel.findOne({urlCode: req.params.code});

        // if the url object is found, redirect to the orignalUrl
        if(url) {
            return res.redirect(url.originalUrl);
        } else {
            // if it's not found
            return res.status(404).json("No URL found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Server error");
    }
})

module.exports = router;