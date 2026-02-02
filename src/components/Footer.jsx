import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-10 py-6 bg-gradient-to-r from-[#0f0f0f] via-[#141414] to-[#0f0f0f] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">

        {/* Left */}
         <p>
          © {new Date().getFullYear()} | All Rights Reserved
        </p>

        {/* Center */}
        <div className="text-center text-xs text-gray-300 leading-relaxed">
          <p>Always download for best results</p>
        </div>

        {/* Right */}
       {/* Right */}
<div className="text-center sm:text-right">
  <p className="text-gray-300 font-medium">
    Made by Dipannita Sharma
  </p>

  {/* Social Links */}
  <div className="flex justify-center sm:justify-end gap-3 mt-2 text-xs">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/sharma_dipannita?igsh=MXQxdHVlZHZqM3FmcQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-400 hover:text-pink-300 transition"
    >
      Instagram
    </a>

    <span className="text-gray-600">|</span>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/dipannita-sharma-4906ab291"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition"
    >
      LinkedIn
    </a>

  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
