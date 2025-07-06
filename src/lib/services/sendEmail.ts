import nodemailer from "nodemailer";

type EmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: "smtp.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@sarhnomow.com", // إيميل الإرسال
      pass: "qwerty1234", // كلمة السر
    },
  });

  await transporter.sendMail({
    from: `"${name}" <info@sarhnomow.com>`,
    to: "info@sarhnomow.com",
    subject: subject,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your website contact form.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #999; font-size: 12px;">
          This email was sent from your website contact form at ${new Date().toLocaleString()}.
        </p>
      </div>
    `,
  });

  return { success: true };
}
