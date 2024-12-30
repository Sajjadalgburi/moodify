"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

// Handles the sign-up process, including email and password validation, and user creation
export const signUpAction = async (formData: FormData) => {
  const supabase = await createClient();

  const email = formData.get("email")?.toString() as string;
  const password = formData.get("password")?.toString() as string;
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    console.error("Email or password is missing");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    redirect("/auth?error=Could not sign you in");
  }

  revalidatePath("/", "layout");
  redirect("/auth?message=Check your email to verify your account");
};

// Handles user sign-in by verifying email and password credentials
export const signInAction = async (formData: FormData) => {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/auth?error=Could Not Authenticate User");
  }

  revalidatePath("/", "layout");
  redirect("/");
};
