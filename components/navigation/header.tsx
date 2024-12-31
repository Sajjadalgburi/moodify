"use client";

import { Button } from "../ui/button";
import { authBtns } from "@/library";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./../theme-switch/page";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openModal = searchParams.get("modal") as string | null;

  if (openModal) {
    return null;
  }

  return (
    <header className="flex justify-between items-center px-4 py-2 relative bg-background z-50 overflow-hidden">
      <Link href="/" className="text-2xl font-bold">
        Logo
      </Link>
      <div className="gap-2 flex">
        <ModeToggle />
        {authBtns.map((btn) => (
          <Button
            key={btn.id}
            onClick={() => router.push(`/auth?q=${btn.text}`)}
            variant={btn.variant}
            className="font-bold capitalize"
          >
            {btn.text}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
