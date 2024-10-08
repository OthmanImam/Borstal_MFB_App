import React, { useState } from 'react';
import { Table, Tag, Button, notification } from 'antd';

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
  const notifyDuePayment = (customer) => {
    notification.open({
      message: `Payment Due for ${customer.name}`,
      description: `The due payment for ${customer.name} is $${customer.duePayment.toFixed(2)}.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

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
      title: 'Loan Status',
      dataIndex: 'loanStatus',
      key: 'loanStatus',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
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
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, customer) => (
        <Button onClick={() => notifyDuePayment(customer)} type="primary">
          Notify Due Payment
        </Button>
      ),
    },
  ];

  // Calculate total balance
  const totalBalance = data.reduce((total, customer) => total + customer.balance, 0).toFixed(2);
  const totalLoanBalance = data.reduce((total, customer) => total + customer.loanBalance, 0).toFixed(2);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Customer Information</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        rowKey="key"
      />
      <h3 className="mt-4">Total Balance: ${totalBalance}</h3>
      <h3>Total Loan Balance: ${totalLoanBalance}</h3>
    </div>
  );
};

export default CustomersPage;
