import { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import DashbordPage from '../pages/DashboardPage';
import Files from '../pages/Files';
import Analytics from '../pages/Analytics';
import CustomersPage from '../pages/CustomersPage';
import Settings from '../pages/Settings';
import Footer from './Footer.';

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { RiFileCopy2Line, RiFileUserLine, RiHome7Line, RiLineChartLine, RiLogoutBoxLine } from 'react-icons/ri';
import BackupModal from '../ui/BackupModal';

const navigation = [
  { name: 'Dashboard', icon: RiHome7Line, current: true },
  { name: 'Files', icon: RiFileCopy2Line, current: false },
  { name: 'Analytics', icon: RiLineChartLine, current: false },
  { name: 'Customers', icon: RiFileUserLine, current: false },
  { name: 'Settings', icon: Cog6ToothIcon, current: false },
  { name: 'Logout', icon: RiLogoutBoxLine, current: false },
];

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '/' },

];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setSidebarOpen(false); 
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <DashbordPage />;
      case 'Files':
        return <Files />;
      case 'Analytics':
        return <Analytics />;
      case 'Customers':
        return <CustomersPage />;
      case 'Settings':
        return <Settings />;
      case 'Logout':
        return <BackupModal />;
      default:
        return <div>Welcome!</div>;
    }
  };

  return (
    <>
      <div>
        {/* Include Sidebar */}
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
        />

        {/* Main content area */}
        <div className="lg:pl-72 h-screen flex flex-col">
          {/* Include NavBar */}
          <NavBar setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />

          <main className="flex-grow py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {renderContent()} {/* Display content based on active sidebar item */}
            </div>
          </main>

          {/* Include Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
