import React, { useState } from "react";
import Input from './Input';

const Color = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState({
    red: false,
    blue: false,
    green: false,
    yellow: false,
  });

  const handleToggle = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedColors((prevState) => ({
      ...prevState,
      [name.toLowerCase()]: checked,
    }));
  };

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={handleToggle}
      >
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Color
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="py-2 space-y-2">
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Red"
              name="red" // Ensure this matches the state key
              checked={selectedColors.red}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Blue"
              name="blue" // Ensure this matches the state key
              checked={selectedColors.blue}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Green"
              name="green" // Ensure this matches the state key
              checked={selectedColors.green}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Yellow"
              name="yellow" // Ensure this matches the state key
              checked={selectedColors.yellow}
            />
          </li>
        </ul>
      )}
    </li>
  );
};

export default Color;
