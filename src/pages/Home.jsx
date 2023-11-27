import React from "react";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <button className="flex items-center gap-2 rounded-lg border-2 border-black p-1">
          <FaHome />
          <p>Home</p>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">
          Greetings! <span className="text-red-400"> Nishan </span> here, a
          front-end developer extending a warm hello.
        </h1>
        <p>
          I'm a front-end developer specializing in React, dedicated to crafting
          user-friendly interfaces with a creative touch. My focus is on
          delivering seamless experiences, and I stay up-to-date with the latest
          in React development to ensure excellence in my work.
        </p>
      </div>
    </div>
  );
};

export default Home;
