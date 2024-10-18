import React, { useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBackupFile } from '../redux/fileSlice'; // Import your action

const UploadButton = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    dispatch(addBackupFile(files)); // Dispatch the files to Redux
  };

  return (
    <>
      <button
        className="flex items-center px-4 py-2 bg-green-800 text-white rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
        onClick={handleUploadClick}
      >
        <FaCloudUploadAlt className="mr-2" />
        <span className="hidden md:inline">Upload Backup Files</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple // Allows multiple file upload
      />
    </>
  );
};

export default UploadButton;
