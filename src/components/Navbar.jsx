import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  MessageCircleIcon,
  UserCircleIcon,
} from "lucide-react";

const Navbar = () => {
  // State management
  const [activeTab, setActiveTab] = useState("Home");
  const [currentImage, setCurrentImage] = useState("/home-hero.jpg");
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || "home";

  // Navigation data
  const navigationItems = [
    {
      name: "Home",
      path: "/home",
      image: "/home-hero.jpg",
    },
    {
      name: "Chatbot",
      path: "/chatbot",
      image: "/Chatbot-hero.jpg",
    },
    {
      name: "Search",
      path: "/search",
      image: "/Search-hero.jpg",
    },
    {
      name: "Event_schedule",
      path: "/event_schedule",
      image: "/Event_schedule-hero.jpg",
    },
  ];

  // Click handler
  const handleNavClick = (name, image) => {
    setActiveTab(name);
    setCurrentImage(image);
  };

  return (
    <main>
      {/* Navigation Bar */}
      <nav className="w-full border-b border-gray-200 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left side - Logo and Nav Links */}
            <div className="flex">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Logo</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleNavClick(item.name, item.image)}
                    className={`
                      inline-flex items-center px-1 pt-1 border-b-2 
                      text-sm font-medium cursor-pointer
                      
                      ${
                        activeTab === item.name
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <BellIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <MessageCircleIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <UserCircleIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="sm:hidden">
          {/* Mobile Navigation Links */}
          <div className="pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                onClick={() => handleNavClick(item.name, item.image)}
                className={`
                  block pl-3 pr-4 py-2 border-l-4 
                  text-base font-medium cursor-pointer
                  ${
                    activeTab === item.name
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                  ${
                    (item.path === "/" ? "home" : item.path.slice(1)) ===
                    currentPath
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }

                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-around px-4">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <BellIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <MessageCircleIcon className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <UserCircleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
