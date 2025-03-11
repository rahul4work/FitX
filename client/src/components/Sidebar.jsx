import React, { useState } from "react";
import { 
  FaHome, FaList, FaClock, FaCog, 
  FaClipboard, FaSignOutAlt, FaBars, FaTimes 
} from "react-icons/fa";

const Sidebar = ({ isProfileOpen }) => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div 
      className={`backdrop-blur-lg bg-white/30 shadow-xl border border-white/20 ${
        isOpen ? 'w-60' : 'w-20'
      } h-screen flex flex-col items-center justify-between py-6 fixed rounded-r-3xl transition-all duration-500 ease-in-out z-50`}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}
    >
      
      {/* Toggle Button */}
      <div className="flex justify-center items-center w-full mb-4">
        <button 
          onClick={toggleSidebar}
          className="text-gray-600 text-2xl p-2 rounded-full hover:bg-white transition-all"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col items-center gap-6 w-full">

        {/* Home */}
        <div 
          onClick={() => setActive("home")} 
          className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 ${
            active === "home" ? "bg-white/50 shadow-lg" : ""
          }`}
        >
          <FaHome className={`text-2xl ${active === "home" ? "text-blue-500" : "text-gray-500"}`} />
          {isOpen && <p className="text-gray-600 font-medium">Home</p>}
        </div>

        {/* Tasks */}
        <div 
          onClick={() => setActive("tasks")} 
          className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 ${
            active === "tasks" ? "bg-white/50 shadow-lg" : ""
          }`}
        >
          <FaList className={`text-2xl ${active === "tasks" ? "text-blue-500" : "text-gray-500"}`} />
          {isOpen && <p className="text-gray-600 font-medium">Tasks</p>}
        </div>

        {/* History */}
        <div 
          onClick={() => setActive("history")} 
          className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 ${
            active === "history" ? "bg-white/50 shadow-lg" : ""
          }`}
        >
          <FaClock className={`text-2xl ${active === "history" ? "text-blue-500" : "text-gray-500"}`} />
          {isOpen && <p className="text-gray-600 font-medium">History</p>}
        </div>

        {/* Settings */}
        <div 
          onClick={() => setActive("settings")} 
          className={`cursor-pointer flex items-center gap-4 w-10/12 p-2 rounded-xl transition-all duration-300 ${
            active === "settings" ? "bg-white/50 shadow-lg" : ""
          }`}
        >
          <FaCog className={`text-2xl ${active === "settings" ? "text-blue-500" : "text-gray-500"}`} />
          {isOpen && <p className="text-gray-600 font-medium">Settings</p>}
        </div>
      </div>

      {/* Logout */}
      <div className="mb-6 flex justify-center">
        <FaSignOutAlt 
          className="text-2xl text-gray-500 cursor-pointer hover:text-red-500 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Sidebar;
