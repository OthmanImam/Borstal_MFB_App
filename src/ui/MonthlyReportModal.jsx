import React from 'react';
import { Button, Modal, Table, DatePicker, Empty } from 'antd';
import moment from 'moment';
import { downloadPDF } from '../utils/DownloadFuction'; // Replace with actual file download functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MonthlyReportModal = ({
  isVisible,
  handleCancel,
  selectedFile,
  hasReport,
  transactionData,
  transactionColumns,
}) => {
  const navigate = useNavigate(); // Initialize navigate

  // Handle the modal cancel event
  const handleModalCancel = () => {
    handleCancel(); // Call the existing handleCancel function
    navigate('/files'); // Navigate to the dashboard route
  };

  const handleclick = ()=>{
    // Add your custom logic here
    // For example, navigate to a new page with transaction data
    navigate(`/analytics`); // Navigate to the transactions page with transaction data
  }

  const handleDownloadPDF = () => {
    downloadPDF(transactionData, selectedFile); // Pass transaction data and file name
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={handleModalCancel} // Use the updated cancel handler
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
        </div>

        {hasReport ? (
          <>
            {/* Filter Input and Action Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <DatePicker
                placeholder="Filter by Date"
                className="mr-0 md:mr-4 mb-2 md:mb-0 cursor-pointer w-full md:w-auto" // Full width on mobile
                defaultValue={moment()}
              />
              <div className="flex flex-wrap space-x-0 md:space-x-4 box-border">
              <Button 
                type='secondary'
                onClick={handleDownloadPDF} 
                className="w-full bg-green-800 text-white hover:bg-white md:w-auto hover:bg-none hover:border-green-900 hover:text-green-950"
              >
                Download
              </Button>

                <Button type="secondary" onClick={handleclick} className="w-full text-green-800 hover:bg-green-900 hover:border-none hover:text-white border-green-900 md:w-auto">
                  Analysis
                </Button>
              </div>
            </div>

            {/* Transaction Table */}
            <Table
              className="cursor-pointer"
              size="middle"
              rowClassName={() => 'border-b border-gray-200'}
              columns={transactionColumns}
              dataSource={transactionData}
              pagination={{ pageSizeOptions: ['5', '10'], showSizeChanger: true }}
              scroll={{ x: true }} // Enable horizontal scrolling for table on smaller screens
            />
          </>
        ) : (
          <div className="text-center py-4">
            
           <Empty description="No Data on this Page" />
      
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MonthlyReportModal;
