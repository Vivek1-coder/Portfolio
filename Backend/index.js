const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nPhone: ${phone} \n Email: ${email}\n message: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
