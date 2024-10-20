import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector

// Mock function to simulate fetching the authenticated user
const getAuthenticatedUser = () => {
  return {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    firstName: 'Salisu',
    lastName: 'Muhammad',
    email: 'imkargi@gmail.com',
    username: 'Salisu',
    timezone: 'Pacific Standard Time',
  };
};

function Settings() {
  // Get staffId from Redux store
  const staffId = useSelector((state) => state.auth.staffId);

  // State for the form fields
  const [avatar, setAvatar] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [timezone, setTimezone] = useState('');

  // Simulate fetching user data on component mount
  useEffect(() => {
    const user = getAuthenticatedUser();
    setAvatar(user.avatar);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setUsername(user.username);
    setTimezone(user.timezone);
  }, []);

  // Handle avatar change
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save updated information (e.g., send to API)
    const updatedUser = { firstName, lastName, email, username, timezone };
    console.log('Updated user data:', updatedUser);
    alert('Profile updated!');
  };

  return (
    <div className="divide-y divide-gray-300">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          {/* Display Staff ID at the top */}
          <h2 className="text-2xl font-semibold text-red-900 mb-4">Staff Information</h2>
          <p className="text-sm font-semibold text-gray-900">Staff ID: {staffId}</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Update your personal information below.
          </p>
        </div>

        <form className="md:col-span-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                alt="User Avatar"
                src={avatar}
                className="h-24 w-24 flex-none rounded-lg bg-gray-300 object-cover"
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="rounded-md bg-gray-100 p-2 text-sm font-semibold text-gray-700 shadow-sm"
                />
                <p className="mt-2 text-xs leading-5 text-gray-500">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md border-green-900 px-3 py-2 text-sm font-semibold bg-green-900 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
