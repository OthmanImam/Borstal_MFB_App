import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPassword, selectPassword } from '../redux/AuthSlice' // Adjust the import path as necessary
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordInput = () => {
  const dispatch = useDispatch();
  const password = useSelector(selectPassword);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value)); // Dispatch the action to update the password in Redux
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        className="w-full h-[64px] p-2 rounded border-solid border-2 border-yellow-700"
        placeholder="********************************"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-2 text-yellow-700"
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
