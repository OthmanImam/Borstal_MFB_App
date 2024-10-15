import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer.';
import BackupModal from '../ui/BackupModal'; // Import BackupModal
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { RiFileCopy2Line, RiFileUserLine, RiHome7Line, RiLineChartLine } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';

const navigationItems = [
  { name: 'Dashboard', icon: RiHome7Line },
  { name: 'Files', icon: RiFileCopy2Line },
  { name: 'Analytics', icon: RiLineChartLine },
  { name: 'Customers', icon: RiFileUserLine },
  { name: 'Settings', icon: Cog6ToothIcon },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isBackupModalVisible, setBackupModalVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    const matchingItem = navigationItems.find(item => item.name.toLowerCase() === currentPath);
    if (matchingItem) {
      setActiveItem(matchingItem.name);
    }
  }, [location.pathname]);

  const handleItemClick = (itemName) => {
    if (itemName === 'Logout') {
      setBackupModalVisible(true);
      setActiveItem(itemName); // Set active item for Logout
    } else {
      setBackupModalVisible(false); // Close modal for other navigation items
      setActiveItem(itemName);
      navigate(`/${itemName.toLowerCase()}`);
    }
  };

  const closeBackupModal = () => {
    setBackupModalVisible(false); // Close modal
  };

  return (
    <>
      <div>
        {/* Include Sidebar */}
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigationItems}
          handleItemClick={handleItemClick}
          activeItem={activeItem} 
        />

        {/* Main content area */}
        <div className="lg:pl-72 h-screen flex flex-col">
          <NavBar setSidebarOpen={setSidebarOpen} />

          <main className="flex-grow py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Outlet /> {/* Render child routes */}
            </div>
          </main>

          {/* Include Footer */}
          <Footer />
        </div>
      </div>

      {/* Show BackupModal if visible */}
      {isBackupModalVisible && <BackupModal onClose={closeBackupModal} />}
    </>
  );
}
