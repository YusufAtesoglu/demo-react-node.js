import React, { useState } from 'react';
import Input from './Input';

const Brand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState({
    Nike: false,
    Adidas: false,
    Puma: false,
    Vans: false,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedBrands((prevState) => ({
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
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Brand</span>
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
              title="Nike"
              name="Nike"
              checked={selectedBrands.Nike}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Adidas"
              name="Adidas"
              checked={selectedBrands.Adidas}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Puma"
              name="Puma"
              checked={selectedBrands.Puma}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Vans"
              name="Vans"
              checked={selectedBrands.Vans}
            />
          </li>
        </ul>
      )}
    </li>
  );
};

export default Brand;
