import React from "react";
import { IconType } from "react-icons";

const Icon = ({ icon: Icon }: { icon: IconType }) => {
  return (
    <Icon
      size={20}
      className="hover:text-secondary hover:scale-110 transform transition duration-400"
    />
  );
};

export default Icon;
