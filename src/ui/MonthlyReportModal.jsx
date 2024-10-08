import React from 'react';
import { Button, Modal, Table, DatePicker } from 'antd';
// import { CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import { downloadPDF, downloadExcel, downloadImage } from '../utils/DownloadFuction'; // Replace with actual file download functions

const MonthlyReportModal = ({
  isVisible,
  handleCancel,
  selectedFile,
  hasReport,
  transactionData,
  transactionColumns,
}) => {
  const handleDownloadPDF = () => {
    downloadPDF(transactionData, selectedFile); // Pass transaction data and file name
  };

  const handleDownloadExcel = () => {
    downloadExcel(transactionData, selectedFile);
  };

  const handleDownloadImage = () => {
    downloadImage(selectedFile); // Replace with logic if needed
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      className="monthly-report-modal cursor-pointer"
      bodyStyle={{ padding: '16px' }} // Adjust padding for mobile
      style={{ maxWidth: '90%', margin: '0 auto' }} // Make modal responsive
    >
      <div>
        {/* Modal Header: File Title and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-center md:text-left">{selectedFile}</h2>
          {/* <Button
            shape="circle"
            icon={<CloseOutlined />}
            onClick={handleCancel}
            className="border-none"
          /> */}
        </div>

        {hasReport ? (
          <>
            {/* Filter Input and Action Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <DatePicker
                placeholder="Filter by Date"
                className="mr-0 md:mr-4 mb-2 md:mb-0 cursor-pointer w-full md:w-auto" // Full width on mobile
                defaultValue={moment('2021-05-16', 'YYYY-MM-DD')}
              />
              <div className="flex flex-wrap space-x-0 md:space-x-4">
                <Button type="primary" onClick={handleDownloadPDF} className="w-full md:w-auto">Download PDF</Button>
              </div>
            </div>

            {/* Transaction Table */}
            <Table
              className="cursor-pointer"
              size="small"
              rowClassName={() => 'border-b border-gray-200'}
              columns={transactionColumns}
              dataSource={transactionData}
              pagination={{ pageSizeOptions: ['5', '10', '20'], showSizeChanger: true }}
              scroll={{ x: true }} // Enable horizontal scrolling for table on smaller screens
            />
          </>
        ) : (
          <div className="text-center py-4">
            <p>No report available for this file.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MonthlyReportModal;
