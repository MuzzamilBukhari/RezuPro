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
      className={`flex text-black font-medium py-1 px-4 focus:outline-none border-2 border-primary hover:bg-primary/60 rounded-lg duration-200 text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
