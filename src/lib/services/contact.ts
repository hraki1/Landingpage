import { ContactFormData } from "../validations/contact";


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

// Default email service implementation
export class DefaultEmailService implements EmailService {
  async sendContactEmail(data: ContactFormData): Promise<ContactSubmissionResult> {
    try {
      // Simulate email sending (in production, you would use a real email service)
      console.log('Sending contact email:', {
        to: 'info@sarh-alnomu.com',
        from: data.email,
        subject: `Contact Form: ${data.subject}`,
        body: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // In a real implementation, you would use a service like SendGrid, AWS SES, etc.
      // Example with SendGrid:
      // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     personalizations: [{ to: [{ email: 'info@sarh-alnomu.com' }] }],
      //     from: { email: 'noreply@yourdomain.com' },
      //     subject: `Contact Form: ${data.subject}`,
      //     content: [{ type: 'text/plain', value: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}` }],
      //   }),
      // });

      return {
        success: true,
        submissionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      };
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email notification',
      };
    }
  }
} 