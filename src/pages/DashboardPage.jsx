import React from 'react';
import Card from '../ui/Card';
import Chart from '../ui/Chart';

const Dashboard = () => {
  return (
    <>
    <div className="text-red-800">
      <h1 className="text-2xl">Dashboard</h1>
    </div>
    <div className="p-2 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="Total Funds" value="₦28,000,000" trend="+10.83%" icon="💰" analytic='Analytics for last week' />
        <Card title="Active Loans" value="₦250,000" trend="-3.21%" icon="🏦" analytic='Analytics for last week' />
        <Card title="Pending Loans" value="₦750,250" trend="-2.71%" icon="🕒"  analytic='Analytics for last week'/>
        <Card title="New Accounts" value="10,183" trend="+10.83%" icon="👥"  analytic='Analytics for last week'/>
        <Card title="Total Customers" value="15,158" trend="+10.83%" icon="🧑‍🤝‍🧑" analytic='Analytics for last week' />
        <Card title="Loan Request" value="10,183" trend="+10.83%" icon="📄"  analytic='Analytics for last week'/>
      </div>

      {/* Chart Component */}
      <div className="mt-10">
        <Chart />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
