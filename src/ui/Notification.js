import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div
      className="fixed top-5 right-5 p-4 bg-red-500 text-white rounded shadow-lg transition-opacity duration-300 ease-in-out transform"
      style={{ opacity: message ? 1 : 0, translate: message ? 'translateY(0)' : 'translateY(-20px)' }}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button className="ml-4" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
