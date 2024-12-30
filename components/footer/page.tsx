"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { useSearchParams } from "next/navigation";

const Footer: React.FC = () => {
  const searchParams = useSearchParams();
  const openModal = searchParams.get("modal") as string | null;

  if (openModal) {
    return null;
  }

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-5 fixed bottom-0 w-full">
      <div className="flex gap-5 mb-5 md:mb-0 ">
        <a
          href="https://github.com/Sajjadalgburi"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/sajjadalgburi/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://teal-charlot-41.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <MdDescription size={25} />
        </a>
        <a
          href="https://www.instagram.com/sajjadalgburi/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaInstagram size={25} />
        </a>
      </div>
      <p className="text-xs sm:text-sm">Copyright © 2024 Sajjad Algburi</p>
    </footer>
  );
};

export default Footer;