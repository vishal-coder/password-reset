import nodemailer from "nodemailer";
export async function sendPasswordResetMail(email, hashedResetToken, userId) {
  const link = `${process.env.CLIENT_URL}/verifyToken?id=${userId}&token=${hashedResetToken}`;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SYSTEM_EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: email,
    from: process.env.SYSTEM_EMAIL_ID,
    subject: "Please Verify its you",
    html:
      "<p>You're almost there!</p><br><p>Click the link below to verify your email, and we'll help you to reset your password.</p>" +
      `<p><a href=${link} > Verify your email</a></p>`,
  };

  return await transporter.sendMail(mailOptions);
}
