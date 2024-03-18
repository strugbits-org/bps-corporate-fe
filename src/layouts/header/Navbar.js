import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-around bg-slate-500 w-[100%] h-[100px]">

      <ul className=" bg-slate-300 flex flex-row gap-x-5">
        <li>
        <NavLink to="/services">Services</NavLink>
        </li>
        <li>
        <NavLink to="/rentalstore">RentalStore</NavLink>
        </li>
        <li>
        <NavLink to="/market">Market</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
        </li>
      </ul>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className=" bg-slate-300 flex flex-row gap-x-5">
        <li><NavLink to="/aboutus">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><img src="" alt=""/><span>Search</span></li>
      </ul>
     
    </div>
  );
};

export default Navbar;
