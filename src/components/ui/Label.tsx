import React, { ReactNode } from "react";

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-black mb-1"
    >
      {children}
    </label>
  );
};

export default Label;
