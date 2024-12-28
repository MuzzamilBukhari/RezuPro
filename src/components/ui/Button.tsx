import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={`flex text-white font-medium py-1 px-4 focus:outline-none  bg-secondary hover:bg-secondary border-2 border-none rounded-lg shadow-black shadow-md transition-transform hover:scale-105 duration-300 text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
