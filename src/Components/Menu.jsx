import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="sm:flex sm:justify-end sm:items-start hidden sm:visible sticky top-0">
      <input type="checkbox" id="menu-toggle" className="hidden" />

      <div className="text-content flex flex-col items-end space-y-4">
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer flex justify-end"
        >
          <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
          </div>
        </label>

        <ul className="space-y-2 text-[14px] slide block">
          <li className="w-[102px] bg-white/30 backdrop-blur-[2px] rounded-[5px] p-1 px-2 border border-white/20">
            <Link to="about" smooth={true} duration={2000}>
              ABOUT
            </Link>
          </li>
          <li className="w-[102px] bg-white/30 backdrop-blur-[2px] rounded-[5px] p-1 px-2 border border-white/20">
            <Link to="buildings" smooth={true} duration={2000}>
              BUILDINGS
            </Link>
          </li>
          <li className="w-[102px] bg-white/30 backdrop-blur-[2px] rounded-[5px] p-1 px-2 border border-white/20">
            <Link to="careers" smooth={true} duration={2000}>
              CAREERS
            </Link>
          </li>
          <li className="w-[102px] bg-white/30 backdrop-blur-[2px] rounded-[5px] p-1 px-2 border border-white/20">
            <Link to="contact" smooth={true} duration={2000}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
