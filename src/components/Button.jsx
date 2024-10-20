import React from 'react';

const Button = ({ className,label, onClick }) => {
  return (
    <button 
      className="bg-green-800 text-white py-4 px-4 rounded-lg hover:bg-green-600 min-w-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
