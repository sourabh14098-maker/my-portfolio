const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("NYXO Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});