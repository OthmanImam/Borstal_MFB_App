import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '1', thisMonth: 10, lastMonth: 30 },
  { name: '2', thisMonth: 40, lastMonth: 45 },
  { name: '3', thisMonth: 30, lastMonth: 35 },
  { name: '4', thisMonth: 50, lastMonth: 25 },
  { name: '5', thisMonth: 60, lastMonth: 40 },
  { name: '6', thisMonth: 20, lastMonth: 30 },
];

const Dashboard = () => {
  return (
    <div className="flex justify-between p-8">
      {/* Chart Section */}
      <div className="w-2/3">
        <h2 className="text-red-500 text-xl font-semibold mb-4">This month’s trends</h2>
        <p className="text-gray-400 text-sm mb-4">as of 15 Aug 2020, 07:47 PM</p>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="thisMonth" stroke="#f6b526" />
            <Line type="monotone" dataKey="lastMonth" stroke="#c4c4c4" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Right-hand Stats Section */}
      {/* <div className="w-1/3 flex flex-col justify-around text-center bg-gray-50 rounded-lg p-6 shadow-lg">
        <div>
          <p className="text-gray-500 text-sm">New Customers</p>
          <h3 className="text-3xl font-bold">449</h3>
        </div>
        <div>
          <p className="text-gray-500 text-sm">New loan requests</p>
          <h3 className="text-3xl font-bold">426</h3>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Approved Loans</p>
          <h3 className="text-3xl font-bold">33%</h3>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Payback loans</p>
          <h3 className="text-3xl font-bold">112</h3>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Pending loan requests</p>
          <h3 className="text-3xl font-bold">123</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
