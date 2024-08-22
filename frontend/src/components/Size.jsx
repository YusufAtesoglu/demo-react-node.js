import React, { useState } from 'react';
import Input from './Input';

const Size = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedSizes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={toggleDropdown}
      >
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Size</span>
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
              title="40"
              name="40"
              checked={selectedSizes[40]}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="41"
              name="41"
              checked={selectedSizes[41]}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="42"
              name="42"
              checked={selectedSizes[42]}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="43"
              name="43"
              checked={selectedSizes[43]}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="44"
              name="44"
              checked={selectedSizes[44]}
            />
          </li>
        </ul>
      )}
    </li>
  );
};

export default Size;
