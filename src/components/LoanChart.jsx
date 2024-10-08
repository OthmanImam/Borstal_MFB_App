import React from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LoanChart = () => {
  // Example data representing loan rise
  const data = [
    { name: 'Jan', loan: 10 },
    { name: 'Feb', loan: 9 },
    { name: 'Feb', loan: 7 },
    { name: 'Apr', loan: 9 },
    { name: 'Jun', loan: 6 },
    { name: 'Jun', loan: 12 },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2  style={{ fontSize: '20px', color: '#990000' }}>Loans</h2>
      <div style={{ fontSize: '48px', color: 'green' }}>
        +47 <span style={{ fontSize: '24px', color: 'green' }}>↑</span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="loan"
            stroke="green"
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanChart;
