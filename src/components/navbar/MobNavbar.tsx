
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Templates",
    slug: "/templates",
  },
  {
    id: 3,
    name: "About Us",
    slug: "/about",
  },
  {
    id: 4,
    name: "Contact",
    slug: "/contact",
  },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-black hover:text-secondary font-semibold body-font flex flex-col md:hidden w-full fixed top-0 left-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <Link href="/" className="flex items-center font-black text-2xl">
            <Image
              src="/images/rezu-pro-black.png"
              alt="Logo Icon"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>

        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross2 className="w-6 h-6 text-secondary hover:text-black" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6 text-black hover:text-secondary" />
          )}
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center gap-2 text-base justify-center absolute top-16 right-0 bg-white bg-opacity-55 backdrop-blur-lg rounded-lg p-4 w-64 h-[calc(100vh-4rem)]`}
      >
        {navItems.map((item) => (
          <NavLink slug={item.slug} key={item.id} name={item.name} />
        ))}
      </nav>
    </header>
  );
};

export default MobNavbar;
