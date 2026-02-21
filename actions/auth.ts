"use server";

import { auth } from "@/lib/auth";

// Reuseable type for form state
export type AuthFormState = {
  message: string | null;
  success?: boolean;
  errors?: Record<string, string[]>;
};

export async function registerUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name) {
      return {
        message: null,
        errors: {
          name: ["Name is required!"],
        },
      };
    }

    if (!email) {
      return {
        message: null,
        errors: {
          email: ["Email is required!"],
        },
      };
    }

    if (!password) {
      return {
        message: null,
        errors: {
          password: ["Password is required!"],
        },
      };
    }

    try {
      const response = await auth.api.signUpEmail({
        body: { name, email, password },
      });

      console.log("API response:", response);

      return {
        message: "User registered successfully!",
        success: true,
        errors: {},
      };
    } catch (error) {
      console.log("Error registering user:", error);
      return {
        message: null,
        errors: {
          general: ["An error occurred while registering. Please try again."],
        },
      };
    }
  } else {
    return {
      message: null,
      errors: {
        general: ["No data received!"],
      },
    };
  }
}
