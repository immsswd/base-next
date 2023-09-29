import React from "react";
import { NavBase } from "@/components/base/NavBase";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-wrap items-center justify-between w-full px-4 bg-white py-4 shadow-md">
        <NavBase />
      </nav>
    </div>
  );
}

export default Navbar;
