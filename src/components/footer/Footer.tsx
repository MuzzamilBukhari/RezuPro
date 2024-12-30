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
    <footer className="bg-white backdrop-blur-md text-black body-font w-full">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <Image
            src="/images/rezu-pro-black.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="text-center  mb-4 sm:mb-0 max-w-xs sm:max-w-full mx-auto sm:mx-0">
          <p className="text-sm font-medium leading-6 whitespace-normal sm:whitespace-nowrap">
            © 2024 RezuPro - Developed By Huzaifa Naeem & Muzammil Bukhari
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <SocialLinks name="Huzaifa" links={huzaifaLinks} />
          <SocialLinks name="Muzzamil" links={muzzamilLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
