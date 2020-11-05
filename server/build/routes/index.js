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
// Have the short URLs redirect to the original URLs
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router(); //middleware to use app.use()
const url_1 = require("../models/url");
// @route     GET /:code
// @desc      Redirect to original Url 
// /:code is a parameter/placeholder
router.get("/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find url object in db by the code set as a parameter in request
        const url = yield url_1.UrlModel.findOne({ urlCode: req.params.code });
        // if the url object is found, redirect to the orignalUrl
        if (url) {
            return res.redirect(url.originalUrl);
        }
        else {
            // if it's not found
            return res.status(404).json("No URL found");
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json("Server error");
    }
}));
module.exports = router;
