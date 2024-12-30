"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { register, login } from "@/utils/actions/auth_actions";
import { Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { form_fields } from "@/library";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * If user is already logged in, redirect to the account page.
 * Do so by using the supabase client component 'client'
 */

const AuthPage = () => {
  const searchParams = useSearchParams();
  const auth_type = searchParams.get("q")!;

  return (
    <main className={`flex justify-center items-center min-h-screen`}>
      <Card className="w-96 py-3 mx-6">
        <CardHeader>
          <CardTitle
            className={`${
              auth_type === "login" ? "sm:tracking-widest" : "sm:tracking-wide"
            } text-2xl sm:text-4xl text-center`}
          >
            {auth_type === "login"
              ? "Welcome Back!"
              : "Register a new Account!"}
          </CardTitle>
          <CardDescription className="text-center">
            {auth_type === "login"
              ? "Please enter your credentials to log in."
              : "Fill in the details below to create a new account."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            {form_fields
              .filter(
                (field) => !(auth_type === "login" && field.id === "username")
              )
              .map((field) => (
                <div className="mb-4" key={field.id}>
                  <label htmlFor={field.id} className="block ml-1 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="w-full border rounded-xl p-3 text-xs sm:text-sm"
                  />
                </div>
              ))}
            {/* Submit Button */}
            <Button
              formAction={auth_type === "login" ? login : register}
              className="font-medium w-full text-sm sm:text-lg"
              variant="default"
            >
              {" "}
              {auth_type === "login" ? "Login" : "Register"}{" "}
            </Button>{" "}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center opacity-50">
          <div className="flex items-center justify-center">
            <p className="-tracking-wider sm:tracking-[.4rem] text-xs sm:text-sm">
              Spotify
            </p>
            {/*  */}
            <p className="mx-2">•</p>
            {/*  */}
            <Link href="/">
              <Home size={25} />
            </Link>
            {/*  */}
            <p className="mx-2">•</p>
            {/*  */}
            <p className="-tracking-wider sm:tracking-[.4rem] text-xs sm:text-sm">
              ChatGPT
            </p>
          </div>

          {auth_type === "register" ? (
            <Link href="/auth?q=login">
              <Button variant="link" className="text-xs sm:text-sm mt-2">
                Already have an account? Login
              </Button>
            </Link>
          ) : (
            <Link href="/auth?q=register">
              <Button variant="link" className="text-xs sm:text-sm mt-2">
                Don&apos;t have an account? Register
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </main>
  );
};

export default AuthPage;
