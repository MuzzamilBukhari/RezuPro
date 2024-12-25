import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const muzzamilLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/muzzamilbukhari/",
    },
    {
      id: 2,
      icon: FaGithub,
      link: "https://github.com/muzzamilbukhari",
    },
    {
      id: 3,
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/mmuzzamilbukhari",
    },
    {
      id: 4,
      icon: FaFacebook,
      link: "https://www.facebook.com/muzzamilbukhari",
    },
  ];

  const huzaifaLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      link:
        "https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      icon: FaGithub,
      link: "https://github.com/huzaifanaeem1",
    },
    {
      id: 3,
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/.zefa.?igsh=a2J4a3dvcWF2Njg5",
    },
    {
      id: 4,
      icon: FaFacebook,
      link:
        "https://www.facebook.com/profile.php?id=100084760552740&mibextid=ZbWKwL",
    },
  ];
  return (
    <section className="bg-white backdrop-blur-md text-black body-font w-full">
      <div className="container px-4 py-6 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo Section */}
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <Image
            src="/images/rezu-pro-black.png"
            alt="Logo"
            width={180}
            height={180}
          />
        </a>

        {/* Copyright Text */}
        <p className="text-sm text-black pl-5 sm:ml-2 sm:pl-2 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4 whitespace-nowrap">
          <span className="pl-5 font-medium">
            © 2024 RezuPro - Developed By Huzaifa Naeem & Muzammil Bukhari
          </span>
        </p>

        {/* Social Links Section */}
        <div className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-end w-full space-x-8">
          {/* Huzaifa Section */}
          <SocialLinks name="Huzaifa" links={huzaifaLinks} />

          {/* Muzammil Section */}
          <SocialLinks name="Muzzamil" links={muzzamilLinks} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
