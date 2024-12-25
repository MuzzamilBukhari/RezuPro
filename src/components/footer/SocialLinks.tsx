import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "./Icon";
import { IconType } from "react-icons";

const SocialLinks = ({
  name,
  links,
}: {
  name: string;
  links: {
    id: number;
    icon: IconType;
    link: string;
  }[];
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold">{name} -</span>
      {links.map((link) => (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <Icon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
