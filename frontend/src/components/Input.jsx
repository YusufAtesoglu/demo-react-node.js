import React from 'react';

const Input = ({ handleChange, value, title, name, checked }) => {
  return (
    <label className="flex items-center space-x-2">
          <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="form-checkbox"
        value={value}
      />
      {title}
    </label>
  );
};

export default Input;
