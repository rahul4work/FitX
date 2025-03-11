import React from 'react'

const Footer = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-col justify-between w-4/5 rounded-2xl bg-white text-gray-600 m-2 mb-4 p-10">
                <div className="grid grid-cols-3 gap-5">

                    {/* About Section */}
                    <div class="">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">About FitX</h2>
                        <p className="text-sm text-gray-600">
                            FitX is a modern health & fitness tracker that helps you monitor
                            your daily steps, calories burned, and sleep hours.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div class="pl-50">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-all">Home</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-all">Dashboard</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-all">My Activity</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-all">Profile</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div class="flex flex-col pl-80">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h2>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
                    © {new Date().getFullYear()} FitX. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer