import React, { ReactNode } from "react";

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
