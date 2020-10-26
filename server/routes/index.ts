// Have the short URLs redirect to the original URLs
import express from "express";
const router = express.Router(); //middleware to use app.use()

import { Url } from "../models/url";

// @route     GET /:code
//@desc       Redirect to original Url 
router.get("/:code", async (req: express.Request, res: express.Response) => {
    try {
        const url:any = await Url.findOne({urlCode: req.params.code});

        if(url) {
            return res.redirect(url.originalUrl);
        } else {

        }
    } catch (err) {

    }
})

module.exports = router;