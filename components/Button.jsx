import React from 'react';

const Button = ({ children, variant = 'primary', disabled = false, ...props }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-sky-500 text-white hover:bg-sky-600';
      case 'secondary':
        return 'bg-gray-300 text-gray-800 hover:bg-gray-400';
      case 'outline':
        return 'border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white';
      default:
        return 'bg-sky-500 text-white hover:bg-sky-600';
    }
  };

  const buttonStyle = getButtonStyle();

  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${buttonStyle}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
