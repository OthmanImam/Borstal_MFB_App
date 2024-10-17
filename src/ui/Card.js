import React from 'react';

const Card = ({ title, value, icon, trend, analytic }) => {
  return (
    <div className="bg-white p-6 px-5 cursor-pointer border rounded-lg shadow-x w-6/4 flex flex-col justify-between hover:drop-shadow-lg">
      <div>
        <span className="flex flex-row justify-between items-center">
          <h3 className="text-base text-gray-700 mb-2">{title}</h3>
          {/* Dynamic background color based on title */}
          <span 
            className={`text-gray-400 text-2xl p-1 rounded-xl ${
              title === 'Total Customers' || title === 'Pending Loans' || title === 'Loan Request'
                ? 'bg-red-300' 
                : title === 'Total Funds' || title === 'New Accounts'
                ? 'bg-green-100' 
                : title === 'Data Analysis' || title === 'Active Loans'
                ? 'bg-yellow-100'
                : 'bg-green-100' // A default case to avoid empty classes
            }`}
          >
            {icon}
          </span>
        </span>
        <h1 className="text-xl  font-semibold mb-4 text-gray-500">{value}</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className={`text-xs font-bold ${trend.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
          ({trend})
        </p>
        <p className="text-wrap text-xs text-gray-400 ">{analytic}</p>
      </div>
    </div>
  );
};

export default Card;
