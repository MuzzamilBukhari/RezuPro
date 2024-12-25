import React from "react";

const SectionTitle = ({ first, second }: { first: string; second: string }) => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black title-font text-black lg:text-white text-center pt-4  ">
      {first} <span className="text-secondary underline">{second}</span>
    </h1>
  );
};

export default SectionTitle;