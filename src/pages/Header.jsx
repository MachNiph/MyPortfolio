import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import DarkModeToggle from "../components/Darkmode";

const Header = () => {
  return (
    <div className="flex flex-col items-center border-2 dark:border-gray-700 gap-4 p-2 ">
      <DarkModeToggle />
      <div className="flex justify-center ">
        <p className="font-bold text-xl">
          {" "}
          Frontend <span className="text-red-400 ">Developer</span>
        </p>
      </div>

      <div className="flex  justify-center">
        <div className="w-1/2">
          <img src="src/assets/img/profile.jpg" alt="" />
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <h1 className="font-bold">Nishan Phuyal</h1>
        <h3>
          Based in <span className="text-red-400">Kathmandu</span>, Nepal
        </h3>
      </div>

      <div className="flex justify-between items-center gap-4 text-xl">
        <a href="https://www.instagram.com/nishann_phuyal/">
          <FaInstagram />
        </a>
        <a href="https://github.com/MachNiph">
          {" "}
          <FaGithub />
        </a>
      </div>

      <button className="flex justify-center items-center gap-2 rounded-sm bg-red-400 p-2 text-white  ">
        <FaRegEnvelope />
        <h2 className="text-white">Hire Me</h2>
      </button>
    </div>
  );
};

export default Header;
