"use server";

import { revalidatePath } from "next/cache";
import { sendEmail } from "../services/sendEmail";
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

    console.log(validatedFields);
    console.log("validation filed data");

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

    console.log("Attempting to send email:", {
      name,
      email,
      subject,
      messageLength: message.length,
    });

    // Send email using the sendEmail function
    const emailResult = await sendEmail({
      name,
      email,
      subject,
      message,
    });

    if (emailResult.success) {
      revalidatePath("/contact");
      return {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
    } else {
      return {
        errors: {},
        message: "Failed to send email. Please try again.",
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

    // Provide more specific error messages
    let errorMessage = "An unexpected error occurred. Please try again.";

    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    }

    return {
      errors: {},
      message: errorMessage,
      formData: {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        subject: (formData.get("subject") as string) || "",
        message: (formData.get("message") as string) || "",
      },
    };
  }
}
