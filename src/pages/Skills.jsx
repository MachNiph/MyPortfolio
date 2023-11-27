import React from "react";
import { FaChessKing } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div>
        <button className="flex items-center gap-2 rounded-lg border-2 border-black p-1">
          <FaChessKing />
          <p> Skills</p>
        </button>
      </div>

      <div className="flex py-6 gap-4 text-6xl">
        <FaReact />
        <SiTailwindcss />
        <div className="text-red-400">
          <AiOutlineAntDesign />
        </div>
        <FaSass />
        <FaGitAlt />
      </div>
    </div>
  );
};

export default Skills;
