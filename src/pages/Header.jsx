import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Nishan</h1>
        <p>Frontend Developer</p>
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <div>
        <h3>Based in Kathmandu, Nepal</h3>
      </div>

      <div>
        <a href="https://www.instagram.com/nishann_phuyal/">
          <FaInstagram />
        </a>
        <a href="https://github.com/MachNiph">
          {" "}
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
