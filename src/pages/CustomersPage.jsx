import React, { useState } from 'react';

const CustomersPage = () => {
  // Sample customer data with loan information
  const initialData = [
    {
      key: '1',
      name: 'John Doe',
      accountNumber: '123456789',
      accountType: 'Savings',
      balance: 2500,
      loanBalance: 1000,
      loanStatus: 'Active',
      duePayment: 200,
      lastTransaction: '2024-10-01',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Jane Smith',
      accountNumber: '987654321',
      accountType: 'Current',
      balance: 1500,
      loanBalance: 5000,
      loanStatus: 'Inactive',
      duePayment: 800,
      lastTransaction: '2024-09-25',
      status: 'Inactive',
    },
    // More customers...
  ];

  const [data, setData] = useState(initialData);

  // Function to send notification for due payment

  // Define columns for the table, including loan information
  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (text) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Loan Balance',
      dataIndex: 'loanBalance',
      key: 'loanBalance',
      render: (text) => `$${text.toFixed(2)}`,
    },
    
    {
      title: 'Due Payment',
      dataIndex: 'duePayment',
      key: 'duePayment',
      render: (text) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Last Transaction',
      dataIndex: 'lastTransaction',
      key: 'lastTransaction',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className={`px-2 py-1 text-sm rounded-full ${
            status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  // Calculate total balance
  const totalBalance = data.reduce((total, customer) => total + customer.balance, 0).toFixed(2);
  const totalLoanBalance = data.reduce((total, customer) => total + customer.loanBalance, 0).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="py-2 px-4 border-b border-gray-300 text-left">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((customer) => (
              <tr key={customer.key}>
                <td className="py-2 px-4 border-b border-gray-300">{customer.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{customer.accountNumber}</td>
                <td className="py-2 px-4 border-b border-gray-300">{customer.accountType}</td>
                <td className="py-2 px-4 border-b border-gray-300">${customer.balance.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-300">${customer.loanBalance.toFixed(2)}</td>
                
                <td className="py-2 px-4 border-b border-gray-300">${customer.duePayment.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-300">{customer.lastTransaction}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-4 text-lg">Total Balance: ${totalBalance}</h3>
      <h3 className="text-lg">Total Loan Balance: ${totalLoanBalance}</h3>
    </div>
  );
};

export default CustomersPage;
