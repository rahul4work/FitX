import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`backdrop-blur-lg bg-white/30 shadow-xl border border-white/20 ${isOpen ? 'w-60' : 'w-20'
        } h-screen flex flex-col items-center justify-between py-6 fixed right-0 rounded-l-3xl transition-all duration-500 ease-in-out z-40`}
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
          onClick={toggleProfile}
          className="text-gray-600 text-2xl p-2 rounded-full hover:bg-white transition-all"
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* ✅ Profile Section */}
      <div
        className={`flex flex-col items-center transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
      >
        <div className="relative w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/picture-person-with-yellow-shirt-words-im-it_1221953-49087.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-800">
          Anurag Hans
        </h3>
        <p className="text-sm text-gray-500">Beginner</p>
      </div>

      {/* ✅ Invitation Section */}
      <div
        className={`mt-4 px-3 transition-all duration-500 ${isOpen ? "block" : "hidden"
          }`}
      >
        <h2 className="text-lg font-semibold text-gray-800">Invitations</h2>
        <div className="mt-3 space-y-3">
          {/* ✅ Invite 1 */}
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-photo/man-with-shirt-that-says-he-is-smiling_1221953-49106.jpg?w=360"
              alt="Priyanshu Mishra"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="text-sm font-semibold">Priyanshu Mishra</h4>
              <p className="text-xs text-gray-500">Invited you Yoga</p>
            </div>
          </div>

          {/* ✅ Invite 2 */}
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-photo/man-with-blue-shirt-that-says-hair_1221953-49069.jpg"
              alt="Rahul Rawat"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="text-sm font-semibold">Rahul Rawat</h4>
              <p className="text-xs text-gray-500">Invited you Jogging</p>
            </div>
          </div>

          {/* ✅ Invite 3 */}
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-photo/woman-with-long-black-hair-is-smiling-white-background_1221953-49253.jpg"
              alt="Emelia Stark"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="text-sm font-semibold">Emelia Stark</h4>
              <p className="text-xs text-gray-500">Invited you Cycling</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Add Task Section */}
      <div
        className={`mt-6 transition-all duration-500 ${isOpen ? "block" : "hidden"
          }`}
      >
        <h2 className="text-lg font-semibold text-gray-800">Add Task</h2>
        <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center justify-center">
          <img
            src="https://img.icons8.com/color/100/000000/calendar--v1.png"
            alt="Task"
            className="w-20"
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Plan your day by now
          </p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;
