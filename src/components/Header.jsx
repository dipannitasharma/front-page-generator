import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <header
      className="
        w-full
        top-0
        z-30
        backdrop-blur-md
        border-b
        shadow-lg
        shadow-black/5
        px-4 sm:px-6
        py-3
        flex
        items-center
        justify-between
        relative
      "
    >
      {/* ================= LEFT: APP NAME ================= */}
      <div className="flex items-center">
        <h1 className="text-lg sm:text-xl font-bold text-blue-300 drop-shadow-sm">
          CA Front Page Generator
        </h1>
      </div>

      {/* ================= CENTER: DESKTOP NAV ================= */}
      <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">

        <Link
          to="/"
          className={`
            font-medium
            transition
            ${
              isActive("/")
                ? "text-blue-400"
                : "text-purple-400 hover:text-white"
            }
          `}
        >
          Home
        </Link>

        <Link
          to="/merge"
          className={`
            font-medium
            transition
            ${
              isActive("/merge")
                ? "text-blue-400"
                : "text-purple-400 hover:text-white"
            }
          `}
        >
          Merge PDFs
        </Link>

      </nav>
      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-2">

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            p-2
            rounded-md
            bg-white/10
            border border-white/30
            text-white
            hover:bg-white/30
            hover:scale-105
            transition
            duration-200
          "
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* GITHUB */}
        <a
          href="https://github.com/dipannitasharma"
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-2
            rounded-full
            text-white
            hover:bg-white/40
            hover:text-black
            backdrop-blur-sm
            transition
            duration-200
          "
          aria-label="GitHub Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.38c.97 0 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <div
          className="
            lg:hidden
            absolute
            top-full
            right-4
            mt-2

            w-44
            bg-[#2a2a2a]/90
            backdrop-blur-lg

            border border-white/20
            rounded-lg
            shadow-xl

            overflow-hidden
            z-50
          "
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              block px-4 py-2
              text-sm text-white
              hover:bg-white/20
              transition
            "
          >
            🏠 Home
          </Link>

          <Link
            to="/merge"
            onClick={() => setOpen(false)}
            className="
              block px-4 py-2
              text-sm text-white
              hover:bg-white/20
              transition
            "
          >
            📄 Merge PDFs
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
