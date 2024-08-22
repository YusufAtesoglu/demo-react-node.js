import React, { useState } from 'react';
import Input from './Input';

const Activity = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState({
    running: false,
    tennis: false,
    casual: false,
    basketball: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedActivities((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    handleChange(event); // Call the handleChange function from props
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Activity
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
              title="Running"
              name="running"
              checked={selectedActivities.running}
              value={"Running"}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Tennis"
              name="tennis"
              checked={selectedActivities.tennis}
              value={"Tennis"}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Casual"
              name="casual"
              checked={selectedActivities.casual}
              value={"Casual"}
            />
          </li>
          <li>
            <Input
              handleChange={handleCheckboxChange}
              title="Basketball"
              name="basketball"
              checked={selectedActivities.basketball}
              value={"Basketball"}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Activity;
