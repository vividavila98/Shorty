"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db"); // bring in function that connects db
const app = express_1.default();
// Connect to database
db_1.connectDB();
app.use(express_1.default.json());
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const PORT = process.env.PORT || 8000;
// Define our routes
app.get('/testing', (req, res) => { res.send('Hello from Express!'); });
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));
app.listen(PORT, () => {
    console.log("Server is running!");
});
