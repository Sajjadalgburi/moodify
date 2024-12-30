"use client";

import React, { FC, MouseEvent } from "react";
import { Button } from "../ui/button";
import { authBtns } from "@/library";
import { useRouter } from "next/navigation";

interface ModalProps {
  hideModal: () => void;
}

const Modal: FC<ModalProps> = ({ hideModal }) => {
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  const router = useRouter();
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className="p-8 border w-96 shadow-lg rounded-md dark:bg-[#0f0f10] bg-white relative">
        <div className="text-center">
          <Button
            variant={"destructive"}
            onClick={hideModal}
            size={"sm"}
            className="absolute top-2 right-2 px-3 text-base font-medium rounded-md"
          >
            x
          </Button>
          <h1 className="text-2xl sm:text-4xl font-bold mt-1">
            Sign In Required
          </h1>

          <p className="text-sm sm:text-lg mt-2 text-gray-500">
            You cannot proceed unless you sign in or sign up.
          </p>

          <div className="gap-3 flex justify-center mt-9">
            {authBtns.map((btn) => (
              <Button
                size={"lg"}
                key={btn.id}
                onClick={() => router.push(`/auth?q=${btn.text}`)}
                variant={btn.variant}
                className="font-bold capitalize"
              >
                {btn.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;