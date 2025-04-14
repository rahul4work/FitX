import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            console.log("Searching for:", searchQuery);
            alert(`Searching for: ${searchQuery}`); // Temporary alert for testing
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        const updateDateTime = () => {
          const now = new Date();
          const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
          setCurrentDateTime(now.toLocaleDateString("en-US", options));
        };
    
        updateDateTime(); // Update initially
        const interval = setInterval(updateDateTime, 1000); // Update every second
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);

    return (
        <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row justify-between items-center w-full sm:w-4/5 bg-white rounded-2xl m-2 mt-4 p-3 md:p-4">
                <div id="text-div" className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-500 text-base md:text-lg">{currentDateTime}</p>
                </div>

                <div id="search-box-div" className="mt-4 md:mt-0">
                    <div className="flex items-center justify-between w-full sm:w-[203px] h-[50px] p-2 rounded-3xl bg-gray-200 gap-2">
                        <input
                            className="text-gray-600 font-light text-base bg-transparent outline-none w-full pl-2"
                            type="text"
                            placeholder="Search here..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyPress} // Triggers search on Enter key
                        />
                        <i
                            className="ri-search-line text-gray-500 pr-2 cursor-pointer"
                            onClick={handleSearch} // Triggers search on icon click
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;