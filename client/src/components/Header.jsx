import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-row justify-between w-4/5 bg-white rounded-2xl m-2 mt-4">
                    <div id='text-div' class="p-4">
                        <h1 class="text-3xl font-bold">Dashboard</h1>
                        <p class="text-gray-500 text-lg">Saturday 01 March 2025</p>
                    </div>

                    <div id='search-box-div' class="p-[23px]">
                        <div class="flex items-center justify-between w-[203px] h-[50px] p-2 rounded-3xl bg-gray-200">
                            <p class="text-gray-400 font-extralight text-lg pl-2">search here...</p>
                            <i class="ri-search-line text-gray-500 pr-2"></i>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Header