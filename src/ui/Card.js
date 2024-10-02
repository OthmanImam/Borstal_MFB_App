import React from 'react';

const Card = ({ title, value, icon, trend, analytic }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-xl w-6/4 flex flex-col justify-between">
      <div>
        <span className="flex flex-row justify-between">
          <h3 className="text-lg text-gray-700 mb-4">{title}</h3>
          {/* Dynamic background color based on title */}
          <span 
            className={`text-gray-400 text-2xl rounded-xl ${
              title === 'Total Funds' 
                ? 'bg-red-300' 
                : title === 'Active Loans' || 'Pending Loans' 
                ? 'bg-green-100' 
                : 'bg-red-100'
            }`}
          >
            {icon}
          </span>
        </span>
        <h1 className="text-3xl font-semibold mb-4 text-gray-500">{value}</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className={`text-sm font-bold ${trend.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
          ({trend})
        </p>
        <p className="text-wrap text-xs text-gray-500">{analytic}</p>
      </div>
    </div>
  );
};

export default Card;
