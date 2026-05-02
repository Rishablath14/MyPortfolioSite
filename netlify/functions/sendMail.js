const nodemailer = require('nodemailer');

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload' }),
    };
  }

  const subject = String(payload.subject || "").replace(/[\r\n]/g, " ").slice(0, 120);
  const message = String(payload.message || "").slice(0, 4000);

  if (!subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Subject and message are required' }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Rishab Lath Portfolio <${process.env.SENDER_MAIL}>`,
      to: "reshablath@gmail.com",
      subject: `Query from Portfolio - ${subject}`,
      text: message,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports = { handler };
