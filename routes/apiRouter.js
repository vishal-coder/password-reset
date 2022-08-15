import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const router = express.Router();
router.get("/", (req, res) => {
  res.send("API route working");
});

router.post("/contactMail", (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SYSTEM_EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: process.env.CLIENT_EMAIL_ID,
    from: process.env.SYSTEM_EMAIL_ID,
    subject: "Portfolio site contact mail",
    html: `<h1>New Contact from Portfolio site</h1>
          <h2>User name : ${name}</h2>
          <h2>User name : ${email}</h2>
          <h2>User name : ${subject}</h2>
          <h2>User name : ${message}</h2>
          </div>`,
  };

  transporter.sendMail(mailOptions);

  res.status(200).send({ success: true, message: "Mail Sent successfully" });
});

export const portfolioMailRouter = router;
