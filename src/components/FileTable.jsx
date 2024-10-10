import React, { useState } from 'react';
import { Table } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';
import MonthlyReportModal from '../ui/MonthlyReportModal'; // Import the modal component

const FileTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasReport, setHasReport] = useState(false);

  const columns = [
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
      render: (text) => (
        <span>
          <FileExcelOutlined className="mr-2 text-green-500" />
          {text}
        </span>
      ),
    },
    {
      title: 'Date Uploaded',
      dataIndex: 'dateUploaded',
      key: 'dateUploaded',
    },
    {
      title: 'File Size',
      dataIndex: 'fileSize',
      key: 'fileSize',
    },
  ];

  const data = [
    { key: '1', fileName: 'May 2021 Report', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: true },
    { key: '2', fileName: 'April 2021 Report', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: false },
    { key: '3', fileName: 'January 2021 Spreadsheet', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: false },
    { key: '4', fileName: 'February 2021 Report', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: true },
    { key: '5', fileName: 'Cumulative Statement', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: false },
    { key: '6', fileName: 'Loan Schedule', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: true },
    { key: '7', fileName: 'December 2020 Report', dateUploaded: '16/05/2021', fileSize: '208kb', hasReport: false },
  ];

  const handleFileClick = (record) => {
    setSelectedFile(record.fileName);
    setHasReport(record.hasReport); // Set whether the file has a report or not
    setIsModalVisible(true);
  };

  const transactionColumns = [
    { title: 'Serial No', dataIndex: 'serialNo', key: 'serialNo' },
    { title: 'Transaction ID', dataIndex: 'transactionId', key: 'transactionId' },
    { title: 'Payment Method', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { title: 'Principal Amount', dataIndex: 'principal', key: 'principal' },
    { title: 'Amount Paid', dataIndex: 'amountPaid', key: 'amountPaid' },
    { title: 'Current Balance', dataIndex: 'currentBalance', key: 'currentBalance' },
    {
      title: 'Loan Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
        className={`px-2 py-1 text-sm rounded-lg ${
          status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}
      >
        {status}
      </span>
        // <span
        //   style={{
        //     backgroundColor: status === 'Completed' ? 'green' : 'orange', // Green for completed, orange for others
        //     color: 'white', // White text color for both cases
        //     fontWeight: 'normal',
        //     padding: '2px 10px', // Add some padding for better visual appearance
        //     borderRadius: '5px', // Optionally add rounded corners
        //   }}
        // >
        //   {status}
        // </span>
      ),
    },
  ];

  const transactionData = [
    {
      key: '1',
      serialNo: 1,
      transactionId: 'TX123',
      paymentMethod: 'Bank Transfer',
      principal: 5000,
      amountPaid: 2500,
      currentBalance: 2500,
      date: '01/05/2021',
      status: 'Running',
    },
    {
      key: '2',
      serialNo: 2,
      transactionId: 'TX124',
      paymentMethod: 'Cash',
      principal: 2000,
      amountPaid: 2000,
      currentBalance: 0,
      date: '05/05/2021',
      status: 'Completed',
    },
    {
      key: '3',
      serialNo: 3,
      transactionId: 'TX125',
      paymentMethod: 'Credit Card',
      principal: 3000,
      amountPaid: 1500,
      currentBalance: 1500,
      date: '10/05/2021',
      status: 'Running',
    },
    {
      key: '4',
      serialNo: 4,
      transactionId: 'TX126',
      paymentMethod: 'PayPal',
      principal: 4000,
      amountPaid: 3000,
      currentBalance: 1000,
      date: '15/05/2021',
      status: 'Running',
    },
    {
      key: '5',
      serialNo: 5,
      transactionId: 'TX127',
      paymentMethod: 'Bank Transfer',
      principal: 6000,
      amountPaid: 6000,
      currentBalance: 0,
      date: '20/05/2021',
      status: 'Completed',
    },
    {
      key: '6',
      serialNo: 6,
      transactionId: 'TX128',
      paymentMethod: 'Cash',
      principal: 1000,
      amountPaid: 500,
      currentBalance: 500,
      date: '25/05/2021',
      status: 'Running',
    },
    {
      key: '7',
      serialNo: 7,
      transactionId: 'TX129',
      paymentMethod: 'Mobile Payment',
      principal: 7000,
      amountPaid: 3500,
      currentBalance: 3500,
      date: '30/05/2021',
      status: 'Running',
    },
    {
      key: '8',
      serialNo: 8,
      transactionId: 'TX130',
      paymentMethod: 'Credit Card',
      principal: 8000,
      amountPaid: 8000,
      currentBalance: 0,
      date: '05/06/2021',
      status: 'Completed',
    },
    {
      key: '9',
      serialNo: 9,
      transactionId: 'TX131',
      paymentMethod: 'Bank Transfer',
      principal: 500,
      amountPaid: 500,
      currentBalance: 0,
      date: '10/06/2021',
      status: 'Completed',
    },
    {
      key: '10',
      serialNo: 10,
      transactionId: 'TX132',
      paymentMethod: 'Cash',
      principal: 300,
      amountPaid: 300,
      currentBalance: 0,
      date: '15/06/2021',
      status: 'Completed',
    },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}> {/* Apply Inter font here */}
      <h2 className="text-lg font-bold mb-4 text-red-900">All Uploaded Files</h2>
      <Table
        className="cursor-pointer text-2xl"
        columns={columns}
        dataSource={data}
        pagination={true}
        onRow={(record) => ({
          onClick: () => handleFileClick(record),
        })}
      />

      {/* Modal for Monthly Transaction Report */}
      <MonthlyReportModal
        isVisible={isModalVisible}
        handleCancel={() => setIsModalVisible(false)}
        selectedFile={selectedFile}
        hasReport={hasReport}
        transactionColumns={transactionColumns}
        transactionData={transactionData}
        className={'text-xl'}
      />
    </div>
  );
};

export default FileTable;
