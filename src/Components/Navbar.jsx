import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="text-white flex flex-wrap justify-between items-center mycontainer p-4 py-5 md:py-3 md:px-6 lg:px-12 xl:px-24">
        <div className="logo font-bold text-lg">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <div>
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-1">
            <span className="mx-1">
              <FaGithub/>
            </span>
            GitHub
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
