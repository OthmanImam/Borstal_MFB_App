// components/NavBar.jsx
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {  FaCloudUploadAlt} from 'react-icons/fa';

// import { useState } from 'react'

const NavBar = ({ setSidebarOpen, NavigationItems }) => {
  return (
<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xl sm:gap-x-6 sm:px-6 lg:px-8">
<button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form action="#" method="GET" className="relative h-10 m-auto px-3 flex rounded flex-1 border-2">
          <label htmlFor="search-field" className="sr-only ">
            Search
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute ml-4 inset-y-0 left-0 h-full w-5 text-gray-400"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Search..."
            className="block h-full w-full inset-0 outline-none border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          />
        </form>
       {/* Upload Button */}
       <div className="flex items-center space-x-4">
       <button className="flex items-center px-4 py-2 bg-green-800 text-white rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500">
      <FaCloudUploadAlt className="mr-2" />
      <span className="hidden md:inline">Upload Backup Files</span>
      </button>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <span className="hidden flex-col  lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="mr-3 text-m font-semibold leading-6 text-green-900"
                >
                 Salisu Muhammad
                </span>
                <span className='flex flex-row'>
                <span>Super Admin</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 text-gray-400"
                />
              </span>
                </span>
              <img
                alt="User avatar"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-50 ml-4"
              />
            </MenuButton>

            {/* <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              {NavigationItems.map((item) => (
                <MenuItem key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-1 text-sm leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems> */}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default NavBar
