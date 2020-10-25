import express from "express";
import { connectDB } from "./config/db";

const app = express();

// Connect to database
connectDB();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => res.send("Hey!"));


app.listen(PORT, () => {
    console.log("Server is running :)");
});