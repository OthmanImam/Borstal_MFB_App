import React, { useRef } from 'react';  
import { FaCloudUploadAlt } from 'react-icons/fa';  
import { useDispatch } from 'react-redux';  
import { addBackupFile } from '../redux/fileSlice';  

const UploadButton = () => {  
  const dispatch = useDispatch();  
  const fileInputRef = useRef(null);  

  // Handler for the upload button click  
  const handleUploadClick = () => {  
    // Trigger the file input click event  
    fileInputRef.current.click();  
  };  

  // Handler for file selection  
  const handleFileChange = (event) => {  
    const files = Array.from(event.target.files);  
    dispatch(addBackupFile(files)); // Replace with your actual logic to handle files  
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
        className="hidden"  // Hides the actual input  
        multiple  // Allows multiple file upload if needed  
      />  
    </>  
  );  
};  

export default UploadButton;