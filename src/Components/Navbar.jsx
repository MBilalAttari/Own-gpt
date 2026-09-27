"use client";

import Image from "next/image";
import logo from "@/../public/logo.svg";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { RxCross1 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-5 lg:px-8 py-4
      flex items-center justify-between
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md"
          : "bg-transparent"
      }
      transition-colors duration-300 owerflow-hidden`}
    >
      {/* Logo */}
      <div className="flex items-center shrink-0">
        <Image
          src={logo}
          alt="Logo"
          className="h-5 w-auto sm:h-5"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center ml-auto mr-8">
        <NavLink />
      </div>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex sm:mr-15 items-center gap-3">
        <Button className="text-black whitespace-nowrap">
          Log in
        </Button>

        <Button className="bg-black text-white py-1.5 whitespace-nowrap">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden absolute top-4 right-4 z-1000 flex items-center justify-center w-9 h-9
        rounded-full  text-black text-xl"
        aria-label="Toggle menu"
      >
        {menuOpen ? <RxCross1 /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-0 right-2 mt-2
          bg-white rounded-2xl shadow-xl p-5
          flex justify-start items-start flex-col gap-5 w-[50vw] lg:hidden"
        >
          <NavLink />

          <div className="flex flex-col md:flex-row gap-3 pt-3 w-full border-t border-gray-200">
            <Button className="text-black w-30">
              Log in
            </Button>

            <Button className="bg-black text-white py-2 w-30">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;