import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="   mb-20 flex items-center justify-between py-2">
      <div className="  flex flex-shrink-0 items-center text-4xl">
        <p className="mx-2 w-10">SM</p>
      </div>
      <div
        className="m-4 flex items-center justify-center gap-4 text-2xl"
      >
        <a href="https://www.instagram.com/s_a_n_d_i_p_18/" target="_blank" rel="Linkedin"><FaInstagram className="hover:text-blue-500 hover:scale-110 transition-all ease-in-out cursor-pointer"  /></a>
        <a href="https://www.linkedin.com/in/sandipmaity21/" target="_blank" rel="Linkedin"><FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-all ease-in-out cursor-pointer"/></a>
        <a href="https://github.com/San-Dip-Maity" target="_blank" rel="Github"><FaGithub className="hover:text-blue-500 hover:scale-110 transition-all ease-in-out cursor-pointer"/></a>
      </div>
    </nav>
  );
};

export default Navbar;
