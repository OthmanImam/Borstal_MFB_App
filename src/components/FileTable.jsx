import React, { useState, useEffect } from 'react';
import { Table, Spin, Alert } from 'antd'; // Added Spin and Alert
import { FileExcelOutlined } from '@ant-design/icons';
import MonthlyReportModal from '../ui/MonthlyReportModal';
import Axios from 'axios'; // Fixed import (should be Axios, not Axios)

const FileTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasReport, setHasReport] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(true); // Loading state for files
  const [loadingTransactions, setLoadingTransactions] = useState(true); // Loading state for transactions
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await Axios.get('https://mocki.io/v1/456f6fc6-8f2c-47d0-96f4-da9d31b1a217');
        setFileData(response.data.files); // Set file data here
        setLoadingFiles(false);
      } catch (error) {
        console.error('Error fetching files:', error);
        setError('Failed to load files.');
        setLoadingFiles(false);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await Axios.get('https://mocki.io/v1/72e6f9cf-6acd-41a8-8c38-e1759045a55b');
        setTransactionData(response.data.transactions); // Set transaction data here
        setLoadingTransactions(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError('Failed to load transactions.');
        setLoadingTransactions(false);
      }
    };

    fetchFiles();
    fetchTransactions();
  }, []);

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
      ),
    },
  ];

  const handleFileClick = (record) => {
    setSelectedFile(record.fileName);
    setHasReport(record.hasReport);
    setIsModalVisible(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 className="text-lg font-bold mb-4 text-left text-red-900">All Uploaded Files</h2>
      
      {loadingFiles || loadingTransactions ? ( // Conditional loading spinner
        <Spin tip="Loading..." />
      ) : error ? ( // Conditional error message
        <Alert message={error} type="error" />
      ) : (
        <Table
          className="cursor-pointer text-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
          columns={columns}
          dataSource={fileData}
          pagination={true}
          onRow={(record) => ({
            onClick: () => handleFileClick(record),
          })}
        />
      )}

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
