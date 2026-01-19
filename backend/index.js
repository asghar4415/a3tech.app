require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
// 1. Trust the Render Proxy (Important for HTTPS/Headers)
app.set('trust proxy', 1);

// 2. Define Allowed Origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://a3tech-wrxg.onrender.com' // Ensure NO trailing slash here
];

// 3. Robust CORS Configuration
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.error(`Blocked by CORS: Origin ${origin} not allowed`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Set to true if you ever plan to use cookies/sessions
}));

// 4. Handle Preflight Requests Globally (Crucial for Render)
app.options('*', cors());

app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
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
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #FA8112; border-bottom: 2px solid #FA8112; padding-bottom: 10px;">New Project Inquiry</h2>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Client Email:</strong> ${email}</p>
                <p style="margin-top: 20px;"><strong>Message:</strong></p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #333;">
                    ${message}
                </div>
                <footer style="margin-top: 20px; font-size: 10px; color: #888;">
                    This email was sent from the A3 Tech Website contact form.
                </footer>
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));