require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// 1. Setup CORS before any routes
const allowedOrigins = [
  'http://localhost:5173',
  'https://a3tech-wrxg.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// 2. The Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Safety check for env variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing Email Credentials in Environment Variables");
        return res.status(500).json({ error: "Server configuration error" });
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: `A3 TECH: New Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #FA8112; border-bottom: 2px solid #FA8112; padding-bottom: 10px;">New Project Inquiry</h2>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Client Email:</strong> ${email}</p>
                <p style="margin-top: 20px;"><strong>Message:</strong></p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #333;">
                    ${message}
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// 3. Start Server
const PORT = process.env.PORT || 10000; // Render prefers 10000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));