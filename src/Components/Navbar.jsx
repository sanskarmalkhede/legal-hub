import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo in the center */}
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-scales-of-justice-icon-simple-style-png-image_5161552.jpg"
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">
            आपला न्यायालय
          </span>
        </div>

        {/* Navbar List */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className={`text-white ${
                activeTab === "home" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/news"
              className={`text-white ${
                activeTab === "news" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("news")}
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/faqs"
              className={`text-white ${
                activeTab === "faqs" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("faqs")}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="fir"
              className={`text-white ${
                activeTab === "file" ? "underline" : ""
              }`}
              onClick={() => handleTabClick("file")}
            >
              File an FIR
            </a>
          </li>
        </ul>

        {/* Sign In and Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <a href="/sign-in" className="text-white">
            Sign In
          </a>
          <a href="/sign-up" className="bg-white text-blue-500 px-4 py-2 rounded-full">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
