import React, { useState, useEffect } from "react";
import { FaHome, FaList, FaClock, FaCog, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <>
      {/* Laptop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-48 flex-col items-center justify-between py-6 
        bg-white shadow-lg border-r border-gray-200 rounded-r-3xl">
        {/* Sidebar Menu */}
        <div className="flex flex-col items-center gap-6 w-full mt-12">
          {[
            { name: "home", icon: FaHome },
            { name: "tasks", icon: FaList },
            { name: "history", icon: FaClock },
            { name: "settings", icon: FaCog }
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 
                ${active === item.name ? "bg-gray-100 shadow-md" : ""}`}
            >
              <item.icon className={`text-2xl ${active === item.name ? "text-blue-500" : "text-gray-500"}`} />
              <p className="text-gray-600 font-medium">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="mb-6 flex justify-center">
          <FaSignOutAlt className="text-2xl text-gray-500 cursor-pointer hover:text-red-500 transition-all duration-300" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <button onClick={() => setShowMobileMenu(true)} className="fixed top-4 left-4 bg-gray-100 p-2 rounded-full shadow-lg z-50">
          <FaBars className="text-xl text-gray-600" />
        </button>

        {/* Overlay */}
        {showMobileMenu && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-30"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg border-r border-gray-200 transform 
          ${showMobileMenu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-auto z-50`}>
          
          {/* Close Button */}
          <button 
            onClick={() => setShowMobileMenu(false)} 
            className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full shadow-md"
          >
            <FaTimes className="text-xl text-gray-600" />
          </button>

          <div className="flex flex-col items-center gap-6 w-full mt-16">
            {[
              { name: "home", icon: FaHome },
              { name: "tasks", icon: FaList },
              { name: "history", icon: FaClock },
              { name: "settings", icon: FaCog }
            ].map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setShowMobileMenu(false);
                }}
                className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 
                  ${active === item.name ? "bg-gray-100 shadow-md" : ""}`}
              >
                <item.icon className={`text-2xl ${active === item.name ? "text-blue-500" : "text-gray-500"}`} />
                <p className="text-gray-600 font-medium">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;