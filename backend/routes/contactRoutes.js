const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.post("/", async (req, res) => {
    try {
        console.log("BODY:", req.body);

        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully",
        });
    } catch (error) {
        console.log("ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;