"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
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
      className={`text-white  body-font bg-transparent fixed w-full top-0 left-0 z-10 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white bg-opacity-50 backdrop-blur-lg" : ""
      } md:flex hidden`}
    >
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <div className="flex items-center text-primary">
          <Link
            href="/"
            className="lg:ml-5 font-black text-3xl flex items-center gap-2"
          >
            <Image
              src="/images/rezu-pro-black.png"
              alt="Logo Icon"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="md:ml-auto flex items-center gap-2 lg:gap-8 mt-5 md:mt-0 text-base justify-center">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
