"use client";

import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const LandingPage = () => {
  const [text, setText] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    setShowMessage(value.length >= 80);
  };

  return (
    <section className="flex items-center justify-center mt-[26vh] sm:mt-[19vh]">
      <div className="max-w-4xl text-center">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold capitalize px-1 sm:px-8">
          Discover Spotify Songs That Match Your mood with AI
        </h1>
        <div className="relative w-[90%] max-w-2xl mx-auto mt-3 sm:mt-8">
          <Textarea
            className="w-full p-4 text-sm sm:text-lg rounded-xl h-18 sm:h-27 resize-none"
            placeholder="Type your message here..."
            maxLength={80}
            value={text}
            onChange={handleTextChange}
          />

          {/* On Click Show modal or send to auth page */}
          <Button
            variant={"default"}
            className="absolute right-2 bottom-2 rounded-full"
          >
            Submit
          </Button>
        </div>
        {showMessage && (
          <p className="mt-2 text-red-500 text-sm">
            You have exceeded the 80 character limit.
          </p>
        )}
        <p className="mt-2 text-[11px] sm:text-xs text-gray-400 tracking-[0.2rem]">
          Powered by AI and Spotify API
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
