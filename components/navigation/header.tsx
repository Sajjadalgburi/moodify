"use client";

import { Button } from "../ui/button";
import { authBtns } from "@/library";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./../theme-switch/page";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center px-4 py-2 relative bg-background z-50 overflow-hidden">
      <div className="text-2xl font-bold">Logo</div>
      <div className="gap-2 flex">
        <ModeToggle />
        {authBtns.map((btn) => (
          <Button
            key={btn.id}
            onClick={() => router.push(`/auth?q=${btn.text}`)}
            variant={btn.variant}
            className="font-bold"
          >
            {btn.text}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Header;
