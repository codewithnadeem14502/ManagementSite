import React, { useState } from "react";
import logo from "../assets/logo.svg";
import humburger from "../assets/icon-hamburger.svg";
import cross from "../assets/icon-close.svg";
const Nav = () => {
  const [navstate, setNav] = useState(false);

  const handlerOpenNavbar = () => {
    setNav(true);
  };
  const handlerCloseNavbar = () => {
    setNav(false);
  };
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="mt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* menu */}
        <div className="hidden md:flex items-center font-montserrat space-x-6">
          <a href="/" className="hover:text-red-300">
            Home
          </a>
          <a href="#testimonials " className="hover:text-red-300">
            Testimonials
          </a>
          <a href="#cta" className="hover:text-red-300 ">
            About Us
          </a>
          <a href="#features" className="hover:text-red-300">
            Features
          </a>
        </div>
        {/* buttton  */}
        <a
          href=""
          className=" hidden md:block px-4 py-3 text-white bg-red-600 rounded-full hover:bg-red-500 font-palanquin  baseline hover:text-black font-semibold"
        >
          Get Started
        </a>
        {/* humburger icons */}

        {/* mobile menu */}
        {navstate == true ? (
          <div className="md:hidden  cursor-pointer">
            <img src={cross} alt="cross" onClick={handlerCloseNavbar} />
            <div
              className="absolute flex flex-col items-center self-end py-8
            mt-10 space-y-6 font-bold bg-gray-300 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md transform-gpu text-xl"
            >
              <a href="#hero " onClick={handlerCloseNavbar}>
                Home
              </a>
              <a href="#testimonials " onClick={handlerCloseNavbar}>
                Testimonials
              </a>
              <a href="#hero " onClick={handlerCloseNavbar}>
                Abouts us
              </a>
              <a href="#cta " onClick={handlerCloseNavbar}>
                Contact Us
              </a>
              <a href="#features " onClick={handlerCloseNavbar}>
                Features
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="md:hidden">
              <div className="flex justify-end items-end ">
                <img
                  src={humburger}
                  alt="humburger"
                  onClick={handlerOpenNavbar}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
