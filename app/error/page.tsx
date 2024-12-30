"use client";

/**
 * The `ErrorPage` component displays a user-friendly error message when something goes wrong.
 * It retrieves an error message from the URL search parameters and displays it if available.
 * The component also provides a link to navigate back to the homepage.
 *
 * @returns {JSX.Element} The rendered error page component.
 */

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const errorMesssage = searchParams.get("message");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-2xl sm:text-5xl mb-5 text-red-600 font-bold">
        Sorry, something went wrong
      </p>
      {/*  */}
      {errorMesssage !== null && errorMesssage !== "" && (
        <p className="text-lg sm:text-2xl mb-5">{errorMesssage}</p>
      )}
      <Button variant={"destructive"}>
        <Link href="/">Go Back to Homepage</Link>
      </Button>
    </div>
  );
}