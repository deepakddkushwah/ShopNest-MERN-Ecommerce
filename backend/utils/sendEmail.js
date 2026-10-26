const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message }) => {
  try {
    const user = process.env.EMAIL_USER || process.env.GMAIL_USER;
    const pass = process.env.EMAIL_PASS || process.env.GMAIL_PASS;

    if (!user || !pass) {
      console.log(`[ShopNest Mailer] Simulation mode: Email to ${email} with subject "${subject}" (SMTP credentials unconfigured)`);
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"ShopNest Support" <${user}>`,
      to: email,
      subject: subject,
      html: message,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[ShopNest Mailer] Email successfully sent to ${email}`);
  } catch (error) {
    console.error(`[ShopNest Mailer] Failed to send email to ${email}: ${error.message}`);
  }
};

module.exports = sendEmail;
