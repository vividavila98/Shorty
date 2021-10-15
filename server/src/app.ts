import express from "express";
import { connectDB } from "./config/db"; // bring in function that connects db

const app = express();

// Connect to database
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is running!");
});

// Define our routes
app.get('/testing', (req, res) => { res.send('Hello from Express!')});
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));