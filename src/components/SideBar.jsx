import { XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logo.svg';
import BackupModal from '../ui/BackupModal';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useState } from 'react';

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  activeItem,
  handleItemClick,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true); // Trigger modal visibility
  };

  const closeModal = () => {
    setShowModal(false); // Function to close the modal
  };

  // Function to handle item click, close modal, and close sidebar on mobile
  const handleItemSelection = (itemName) => {
    handleItemClick(itemName); // Mark the selected item
    setSidebarOpen(false); // Close the sidebar on mobile view
  };

  return (
    <>
      {showModal && <BackupModal onClose={closeModal} />} {/* Modal component */}

      {/* Sidebar for mobile */}
      <div className="relative z-50 lg:hidden">
        <div
          className={`fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear ${
            sidebarOpen ? 'block' : 'hidden'
          }`}
        />
        <div
          className={`fixed inset-0 flex transition ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="relative w-full max-w-xs flex-1 bg-white transition">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex grow flex-col px-6 pb-4">
              <div className="flex h-16 items-center">
                <img alt="Your Company" src={Logo} className="h-8 w-auto pt-10" />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleItemSelection(item.name)} // Close modal and sidebar on item select
                        className={`group flex gap-x-3 hover:drop-shadow-lg rounded-md p-2 text-xl font-semibold leading-6 w-full text-left ${
                          activeItem === item.name
                            ? 'bg-yellow-400 text-red-800'
                            : 'text-red-900 hover:bg-yellow-600 hover:text-white'
                        }`}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </button>
                    </li>
                  ))}
                   <li>
                <div
                  className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full text-left 
                              text-red-900 hover:bg-yellow-600 hover:text-white"
                >
                  <RiLogoutBoxLine className="h-6 w-6 shrink-0" />
                  <button onClick={handleClick}>Logout</button>
                </div>
              </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 items-center mt-10">
            <img alt="Your Company" src={Logo} className="h-20 w-auto my-5" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleItemClick(item.name)} // Desktop view behavior unchanged
                    className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full text-left ${
                      activeItem === item.name
                        ? 'bg-yellow-400 text-red-800'
                        : 'text-red-900 hover:bg-yellow-600 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <div
                  className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full text-left 
                              text-red-900 hover:bg-yellow-600 hover:text-white"
                >
                  <RiLogoutBoxLine className="h-6 w-6 shrink-0" />
                  <button onClick={handleClick}>Logout</button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
