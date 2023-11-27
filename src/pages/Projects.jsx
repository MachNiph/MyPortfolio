import React from "react";
import { FaTasks } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <button className="flex items-center gap-2 rounded-lg border-2 border-black p-1">
          <FaTasks />
          <p>Projects</p>
        </button>
      </div>

      <div>
        <div className="w-1/2 flex flex-col gap-2 ">
          <img src="/public/img/project1.png" alt="" />
          <p>
            {" "}
            <span className="text-red-400">E-commerce</span> website built using react js and tailwind
            css.
          </p>
          <a
            className=" border-2 border-black w-1/2 flex items-center justify-center  "
            href="https://mangobazar.netlify.app/"
          >
            {" "}
            Live Preview
          </a>
        </div>

        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
