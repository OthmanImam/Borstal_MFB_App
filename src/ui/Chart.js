import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { BarChart, Bar } from 'recharts';


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
    <div className="flex flex-row justify-between my-10 border rounded-lg">
      {/* Chart Section */}
      {/* <div className="flex flex-row gap-6"> */}
  {/* Chart Section - 2/3 of the width */}
  <div className="w-2/3 m-5">
    <h2 className="text-red-900 text-xl font-semibold mb-4">This month’s trends</h2>
    <p className="text-gray-400 text-sm mb-4">as of 15 Aug 2020, 07:47 PM</p>

    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <defs>
          <linearGradient id="yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#796806" stopOpacity={7} />
            <stop offset="95%" stopColor="#3751FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis orientation="right" axisLine={false} tickLine={false} />
        <Legend align="right" verticalAlign="top" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="thisMonth"
          stroke="yellow"
          fillOpacity={0.05}
          fill="yellow"
          areaSize={15}
        />
        <Area
          type="monotone"
          dataKey="lastMonth"
          stroke="#82ca9d"
          fillOpacity={0.1}
          fill="transparent"
          areaSize={15}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>

  {/* Statistics Section - 1/3 of the width */}
  <div className="w-1/3 flex flex-col justify-around text-center border-l-2 rounded-lg  ">
    <div>
      <p className="text-gray-400 text-sm">New Customers</p>
      <h3 className="text-3xl text-gray-500 font-bold">449</h3>
    </div>
    <div className='border-t-2' >
      <p className="text-gray-400 text-sm">New loan requests</p>
      <h3 className="text-3xl text-gray-500 font-bold">426</h3>
    </div>
    <div className='border-t-2'>
      <p className="text-gray-400 text-sm">Approved Loans</p>
      <h3 className="text-3xl text-gray-500 font-bold">33%</h3>
    </div >
    <div className='border-t-2'>
      <p className="text-gray-400 text-sm">Payback loans</p>
      <h3 className="text-3xl text-gray-500 font-bold">112</h3>
    </div>
    <div className='border-t-2'>
      <p className="text-gray-500 text-sm">Pending loan requests</p>
      <h3 className="text-3xl text-gray-500 font-bold">123</h3>
    </div>
  </div>
{/* </div> */}

    </div>
  );
};

export default Dashboard;


const loanData = [
  { name: 'Jan', Applied: 12, Cleared: 5 },
  { name: 'Feb', Applied: 15, Cleared: 7 },
  { name: 'Mar', Applied: 23, Cleared: 9 },
  { name: 'Apr', Applied: 8, Cleared: 4 },
  { name: 'May', Applied: 17, Cleared: 6 },
  { name: 'Jun', Applied: 9, Cleared: 5 },
  { name: 'Jul', Applied: 15, Cleared: 8 },
  { name: 'Aug', Applied: 10, Cleared: 5 },
  { name: 'Sep', Applied: 18, Cleared: 10 },
  { name: 'Oct', Applied: 11, Cleared: 5 },
  { name: 'Nov', Applied: 20, Cleared: 12 },
  { name: 'Dec', Applied: 19, Cleared: 11 },
];

export const LoanApplicationChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      {/* <h3 style={{ color: 'red', marginBottom: '20px' }}>Loan Application Chart</h3> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={loanData}
          barCategoryGap={10} barGap={8}>
          <CartesianGrid strokeDasharray="5 5" vertical={false}  />
          <XAxis dataKey="name" axisLine={false} tickLine={false}/>
          <YAxis  axisLine={false}  // Hide the axis line
            tickLine={false}  // Hide the tick lines
            interval={0}      // Display all ticks
            domain={[0, 'auto']}  // Set automatic range based on data, starting from 0
            tickCount={6}        // Total number of ticks (5 unit step)
/>
          <Tooltip />
          <Legend align="right" verticalAlign="top"  wrapperStyle={{ paddingTop: '10px', fontSize: '14px',}}/>
          <Bar dataKey="Applied" fill="#3CB371" barSize={5} radius={10} />
          <Bar dataKey="Cleared" fill="#FFD700" barSize={5} radius={10}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


