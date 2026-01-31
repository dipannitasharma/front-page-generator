import React from "react";

const Header = () => {
  return (
    <header
      className="
        w-full
        bg-white
        border-b
        border-gray-200
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

      {/* RIGHT: GITHUB ICON */}
      <a
        href="https://github.com/dipannitasharma"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2
          rounded-full
          text-gray-600
          hover:bg-gray-200
          hover:text-black
          transition
        "
        aria-label="GitHub Profile"
      >
        {/* GitHub SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.38c.97 0 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
