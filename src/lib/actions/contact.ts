"use server";

import { revalidatePath } from "next/cache";
import { ContactService, DefaultEmailService } from "../services/contact";
import { ContactFormData, validateContactForm } from "../validations/contact";

export type ContactFormState = {
  success?: boolean;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
  message?: string;
  formData?: ContactFormData;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Validate the form data
    const validatedFields = validateContactForm({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Please fix the errors below.",
        formData: {
          name: (formData.get("name") as string) || "",
          email: (formData.get("email") as string) || "",
          subject: (formData.get("subject") as string) || "",
          message: (formData.get("message") as string) || "",
        },
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Initialize contact service
    const emailService = new DefaultEmailService();
    const contactService = new ContactService(emailService);

    // Call the contact service to handle the submission
    const result = await contactService.submitContactForm({
      name,
      email,
      subject,
      message,
    });

    if (result.success) {
      revalidatePath("/contact");
      return {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
    } else {
      return {
        errors: {},
        message: result.error || "Something went wrong. Please try again.",
        formData: {
          name: (formData.get("name") as string) || "",
          email: (formData.get("email") as string) || "",
          subject: (formData.get("subject") as string) || "",
          message: (formData.get("message") as string) || "",
        },
      };
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      errors: {},
      message: "An unexpected error occurred. Please try again.",
      formData: {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        subject: (formData.get("subject") as string) || "",
        message: (formData.get("message") as string) || "",
      },
    };
  }
}
