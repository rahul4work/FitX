import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <>
      {/* Laptop Profile Sidebar */}
      <div className="hidden md:flex fixed top-0 right-0 h-screen w-48 flex-col items-center py-6 
        bg-white shadow-lg border-l border-gray-200 rounded-l-3xl z-20">
        <ProfileContent setIsAuthOpen={setIsAuthOpen} setIsLogin={setIsLogin} />
      </div>

      {/* Mobile Profile Sidebar */}
      <div className="md:hidden fixed top-0 right-0 w-full">
        <button onClick={() => setIsOpen(true)} className="fixed top-4 right-4 bg-gray-100 p-2 rounded-full shadow-lg z-50">
          <FaUserCircle className="text-xl text-gray-600" />
        </button>

        <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg border-l border-gray-200 transform 
          ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-auto z-50`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            <FaTimes className="text-xl text-gray-600" />
          </button>
          <ProfileContent setIsAuthOpen={setIsAuthOpen} setIsLogin={setIsLogin} />
        </div>
      </div>

      {/* Authentication Modal */}
      {isAuthOpen && <AuthModal setIsAuthOpen={setIsAuthOpen} isLogin={isLogin} setIsLogin={setIsLogin} />}
    </>
  );
};

const ProfileContent = ({ setIsAuthOpen, setIsLogin }) => (
  <div className="flex flex-col items-center gap-6 w-full mt-12">
    {/* Profile Circle */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 relative group">
        <img
          src="https://s3.ap-south-1.amazonaws.com/appsinvo.website/Technologies/Wellness/png/23_Welness_app_03.png"
          alt="User Profile"
          className="transition-all duration-1000 ease-in-out transform hover:scale-110 hover:rotate-[-360deg]"
        />
      </div>
      <p className="text-gray-600 text-sm font-bold mt-2">User Profile</p>
    </div>

    {/* Login/Signup Button */}
    <div className=''>
      <button
        onClick={() => { setIsAuthOpen(true); setIsLogin(true); }}
        className="bg-blue-500 text-white px-3 py-4 rounded-full shadow-md hover:bg-blue-600">
        Login / Signup
      </button>
    </div>
  </div>
);

const AuthModal = ({ setIsAuthOpen, isLogin, setIsLogin }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <button onClick={() => setIsAuthOpen(false)} className="absolute top-3 right-3 text-gray-500">
        <FaTimes size={20} />
      </button>
      <h2 className="text-xl font-semibold mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="flex flex-col gap-3">
        {!isLogin && <input type="text" placeholder="Name" className="border p-2 rounded" />}
        <input type="email" placeholder="Email" className="border p-2 rounded" required />
        <input type="password" placeholder="Password" className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="text-center text-sm mt-2">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button className="text-blue-500 underline ml-1" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  </div>
);

export default MyProfile;
