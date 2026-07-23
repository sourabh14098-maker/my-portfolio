const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

console.log("MONGODB_URI =", process.env.MONGODB_URI);
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);

console.log("Chat Route Loaded:", typeof chatRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
    res.send("NYXO Backend Running 🚀");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});