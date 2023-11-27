import React from "react";
import { FaChessKing } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <button className="flex items-center gap-2 rounded-lg border-2 border-black p-1">
          <FaChessKing />
          <p> Skills</p>
        </button>
      </div>

      <div className="flex py-6 gap-4 text-4xl text-red-400">
        <FaReact />
        <SiTailwindcss />
        <AiOutlineAntDesign />
        <FaSass />
        <FaGitAlt />
      </div>
    </div>
  );
};

export default Skills;
