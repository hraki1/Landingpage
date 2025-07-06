import { ContactFormData } from "../validations/contact";
import nodemailer from 'nodemailer';


export interface ContactSubmissionResult {
  success: boolean;
  error?: string;
  submissionId?: string;
}

export interface EmailService {
  sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult>;
}

export class ContactService {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  async submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
    try {
      // Validate the data
      const validationResult = this.validateContactData(data);
      if (!validationResult.isValid) {
        return {
          success: false,
          error: validationResult.error,
        };
      }

      // Send email notification
      const emailResult = await this.emailService.sendContactEmail(data);
      
      if (!emailResult.success) {
        return {
          success: false,
          error: emailResult.error || 'Failed to send email notification',
        };
      }

      // Here you could also save to database, log the submission, etc.
      await this.logContactSubmission(data);

      return {
        success: true,
        submissionId: emailResult.submissionId,
      };
    } catch (error) {
      console.error('Contact service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  private validateContactData(data: ContactFormData): { isValid: boolean; error?: string } {
    // Additional business logic validation can go here
    if (data.message.length > 1000) {
      return {
        isValid: false,
        error: 'Message is too long. Please keep it under 1000 characters.',
      };
    }

    // Check for spam indicators
    if (this.isSpam(data)) {
      return {
        isValid: false,
        error: 'Your message appears to be spam. Please try again.',
      };
    }

    return { isValid: true };
  }

  private isSpam(data: ContactFormData): boolean {
    // Simple spam detection - you can enhance this
    const spamKeywords = ['buy now', 'click here', 'free money', 'lottery'];
    const message = data.message.toLowerCase();
    
    return spamKeywords.some(keyword => message.includes(keyword));
  }

  private async logContactSubmission(data: ContactFormData): Promise<void> {
    // Log the submission for analytics or debugging
    console.log('Contact submission logged:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      messageLength: data.message.length,
    });
  }
}

// Nodemailer email service implementation with Mailtrap
export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Create transporter for Mailtrap
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST || 'smtp.mailtrap.io',
      port: parseInt(process.env.MAILTRAP_PORT || '2525'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
  }

  async sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult> {
    try {
      // Email content
      const mailOptions = {
        from: `"${data.name}" <${data.email}>`,
        to: 'info@sarh-alnomu.com', // Your business email
        replyTo: data.email,
        subject: `Contact Form: ${data.subject}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from your website contact form.
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Subject:</strong> ${data.subject}</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #999; font-size: 12px;">
              This email was sent from your website contact form at ${new Date().toLocaleString()}.
            </p>
          </div>
        `,
      };

      // Send email
      const info = await this.transporter.sendMail(mailOptions);

      console.log('Email sent successfully:', {
        messageId: info.messageId,
        response: info.response,
        timestamp: new Date().toISOString(),
      });

      return {
        success: true,
        submissionId: info.messageId || `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      };
    } catch (error) {
      console.error('Nodemailer email service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email notification',
      };
    }
  }

  // Method to test the connection
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Email service connection verified successfully');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
} 