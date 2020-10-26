import express from "express";
import { connectDB } from "./config/db"; // bring in function that connects db

const app = express();

// Connect to database
connectDB();

app.use(express.json());

const PORT = 8000;

// Define our routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(PORT, () => {
    console.log("Server is running :)");
});