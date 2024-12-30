"use client";

import Link from "next/link";
import React from "react";

const NavLink = ({
  name,
  slug,
  closeMenu,
}: {
  name: string;
  slug: string;
  closeMenu: () => void;
}) => {
  return (
    <Link
      href={slug || "/"}
      className="text-black text-lg font-semibold ring-secondary hover:text-primary hover:underline rounded-lg duration-300 px-7 py-1"
      onClick={closeMenu} // Close menu when clicked
    >
      {name}
    </Link>
  );
};

export default NavLink;
