import React from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CustomTextarea = () => {
  return (
    <div className="relative w-[90%] max-w-2xl mx-auto mt-3 sm:mt-8">
      <Textarea
        className="w-full p-4 text-sm sm:text-lg rounded-xl h-18 sm:h-27 resize-none"
        placeholder="Type your message here..."
        maxLength={81}
      />

      {/* On Click Show modal or send to auth page */}
      <Button
        variant={"default"}
        className="absolute right-2 bottom-2 rounded-full"
      >
        Submit
      </Button>
    </div>
  );
};

export default CustomTextarea;
