import React from "react";

const Header = () => {
  return (
    <header
      className="
        w-full
        bg-white
        border-b
        shadow-sm
        px-4 sm:px-6
        py-3
        flex
        items-center
        justify-between
        sticky
        top-0
        z-30
      "
    >
      {/* LEFT: APP NAME */}
      <h1 className="text-lg sm:text-xl font-bold text-blue-700">
        CA Front Page Generator
      </h1>

      {/* RIGHT: GITHUB */}
      <a
        href="https://github.com/dipannitasharma"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-sm sm:text-base
          text-gray-600
          hover:text-blue-600
          font-medium
          transition
        "
      >
        By Dipannita Sharma
      </a>
    </header>
  );
};

export default Header;
