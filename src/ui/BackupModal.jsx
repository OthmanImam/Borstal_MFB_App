import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';
import { logout } from '../redux/AuthSlice'; // Adjust this import path based on your file structure
import { FaCloudUploadAlt, FaRegTimesCircle } from 'react-icons/fa';
import UploadButton from '../ui/UploadButton'; // Adjust this import path based on your file structure

const BackupModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const dispatch = useDispatch();

  const handleUpload = () => {
    console.log('Upload backup files');
    // Logic for uploading backup files
  };

  const handleLogout = () => {
    dispatch(logout());
    // Any other logic after logging out, e.g., redirecting to login
  };

  return (
    <Modal
      visible={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
      centered
      closeIcon={<FaRegTimesCircle />}
      className="backup-modal"
      maskClosable={true}
      width={400}
      bodyStyle={{ textAlign: 'center', padding: '30px' }}
    >
      <h3 style={{ marginBottom: '16px', color: '#2a2a2a' }}>
        Have you backed up for today?
      </h3>
      <p style={{ marginBottom: '24px', color: '#f5222d', fontWeight: 'bold' }}>
        If no, <span style={{ color: '#f5222d' }}>PLEASE BACKUP NOW!</span>
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <UploadButton />
        <Button
          // icon={<RiLogoutBoxLine />}
          onClick={handleLogout}
          style={{
            padding: '1.1rem',
            backgroundColor: '#6c757d',
            borderColor: '#6c757d',
            color: '#fff',
          }}
        >
          Logout
        </Button>
      </div>
    </Modal>
  );
};

export default BackupModal;
