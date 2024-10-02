// Your main layout or page
import { useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import DashbordPage from '../pages/DashboardPage'
import Files from '../pages/Files'
import Analytics from '../pages/Analytics'
import CustomersPage from '../pages/CustomersPage'
import Settings from '../pages/Settings'

import { HomeIcon, PaperClipIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { MdAnalytics } from 'react-icons/md'
import { FcCustomerSupport } from 'react-icons/fc'
import { BiLogIn } from 'react-icons/bi'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true },
  { name: 'Files', icon: PaperClipIcon, current: false },
  { name: 'Analytics', icon: MdAnalytics, current: false },
  { name: 'Customers', icon: FcCustomerSupport, current: false },
  { name: 'Settings', icon: Cog6ToothIcon, current: false },
  { name: 'Logout', icon: BiLogIn, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')

  // Handle sidebar item clicks
  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    setSidebarOpen(false); 
  }

  // Render content based on the active item
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <DashbordPage />
      case 'Files':
        return <Files />
      case 'Analytics':
        return <Analytics />
      case 'Customers':
        return <CustomersPage />
      case 'Settings':
        return <Settings />
      case 'Logout':
        return <div>Logging Out...</div>
      default:
        return <div>Welcome!</div>
    }
  }

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
        <div className="lg:pl-72">
          {/* Include NavBar */}
          <NavBar setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {renderContent()} {/* Display content based on active sidebar item */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
