require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Base route for health check
app.get('/', (req, res) => res.send("A3 Tech API is running"));

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        },
        tls: { rejectUnauthorized: false }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, 
            subject: `A3 TECH: New Inquiry from ${name}`,
            html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #FA8112; border-bottom: 2px solid #FA8112; padding-bottom: 10px;">New Project Inquiry</h2>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Client Email:</strong> ${email}</p>
                <p style="margin-top: 20px;"><strong>Message:</strong></p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #333;">${message}</div>
            </div>`
        });
        res.status(200).json({ message: "Sent" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed" });
    }
});

const PORT =  5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));

module.exports = app; 