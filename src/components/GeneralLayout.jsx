import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from './Footer.';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { RiFileCopy2Line, RiFileUserLine, RiHome7Line, RiLineChartLine} from 'react-icons/ri';
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering child routes

const navigationItems = [
  { name: 'Dashboard', icon: RiHome7Line },
  { name: 'Files', icon: RiFileCopy2Line },
  { name: 'Analytics', icon: RiLineChartLine },
  { name: 'Customers', icon: RiFileUserLine },
  { name: 'Settings', icon: Cog6ToothIcon },
  // { name: 'Logout', icon: RiLogoutBoxLine },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isBackupModalVisible, setBackupModalVisible] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // Initialize navigate

  const handleItemClick = (itemName) => {
    if (itemName === 'Logout') {
      // Show the backup modal instead of navigating immediately
      setBackupModalVisible(true);
    } else {
      // Navigate to the respective route based on item name
      navigate(`/${itemName.toLowerCase()}`); 
    }
  };

  // const handleModalCancel = () => {
  //   setBackupModalVisible(false);
  //   navigate('/login'); // Navigate to the login page
  // };

  // const handleModalConfirmLogout = () => {
  //   // Handle actual logout logic here if necessary
  //   setBackupModalVisible(false);
  //   navigate('/login'); // Navigate to login after logout
  // };

  return (
    <>
      <div>
        {/* Include Sidebar */}
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigationItems}
          handleItemClick={handleItemClick}
        />

        {/* Main content area */}
        <div className="lg:pl-72 h-screen flex flex-col">
          {/* Include NavBar */}
          <NavBar setSidebarOpen={setSidebarOpen} />

          <main className="flex-grow py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Outlet /> {/* Display child components based on the current route */}
            </div>
          </main>

          {/* Include Footer */}
          <Footer />
        </div>
      </div>

      {/* Backup Modal for Logout confirmation */}
      {/* <BackupModal
        isVisible={isBackupModalVisible}
        handleCancel={handleModalCancel}
        handleConfirm={handleModalConfirmLogout} // Assuming you add a confirm handler in your modal
      /> */}
    </>
  );
}
