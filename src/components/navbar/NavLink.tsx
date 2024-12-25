"use client";

import Link from "next/link";
import React from "react";

const NavLink = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link
      href={slug || "/"}
      className="text-black text-lg font-semibold ring-secondary hover:text-primary hover:underline rounded-lg duration-300 px-7 py-1"
    >
      {name}
    </Link>
  );
};

export default NavLink;
