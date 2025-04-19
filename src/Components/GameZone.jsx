import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";

const GameZone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Button to toggle the dropdown */}
      <button onClick={toggleDropdown} className="px-1 py-2 flex items-center bg-gray-500 text-white rounded-l-md">
        All
        <MdArrowDropDown />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white text-black border rounded shadow-lg w-48">
          <li className="px-4 py-2 hover:bg-gray-200">Alex Skills</li>
          <li className="px-4 py-2 hover:bg-gray-200">Devices</li>
          <li className="px-4 py-2 hover:bg-gray-200">Fashion</li>
          <li className="px-4 py-2 hover:bg-gray-200">Pharmacy</li>
          <li className="px-4 py-2 hover:bg-gray-200">Apps & Games</li>
          <li className="px-4 py-2 hover:bg-gray-200">Baby</li>
          <li className="px-4 py-2 hover:bg-gray-200">Beauty</li>
          <li className="px-4 py-2 hover:bg-gray-200">Books</li>
          <li className="px-4 py-2 hover:bg-gray-200">Electronics</li>
        </ul>
      )}
    </div>
  );
};

export default GameZone;
