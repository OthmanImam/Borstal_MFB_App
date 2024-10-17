import React from 'react';
import Card from '../ui/Card';
import Chart from '../ui/Chart';
import { cardData } from '../data/cardData';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-red-900 mb-4 text-left">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            trend={card.trend}
            icon={card.icon}
            analytic={card.analytic}
          />
        ))}
      </div>
      <div className="mt-20">
        <Chart />
      </div>
    </>
  );
};

export default Dashboard;
