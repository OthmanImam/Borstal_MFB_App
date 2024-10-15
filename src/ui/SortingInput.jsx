import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";


const SortingInput = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage selected option
  const [inputValue, setInputValue] = useState(''); // State to manage input value

  // Function to handle option selection
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setInputValue(value); // Update input value when an option is selected
  };

  return (
    <div className="join w-1/3 h-fit md:flex justify-between flex-col md:flex-row items-center bg-gray-200 rounded-lg"> {/* Adjusted height */}
      {/* Search Input */}
      <div className="w-full flex items-center md:w-auto mb-0 px-6 h-full">
       <span className='text-gray-500'>Show: </span> 
        <input 
          className="input bg-transparent p-3 join-item w-full outline-none " // Full height
          value='Weekly Analysis' // Bind input value to state
          onChange={(e) => setInputValue(e.target.value)} // Allow manual input
        />
      </div>

      {/* Filter Select */}
      <div className="w-full md:w-auto mb-0 h-full bg-yellow-400 rounded-r-lg flex items-center">
        <button 
          className="select  join-item w-12 p-3 h-12 flex justify-center " // Full height
          // value= {`Show:  ${selectedOption}`} // Bind select value to state
          onChange={handleSelectChange} // Handle change
        >
          <SlArrowDown/>
        </button>
      </div>
    </div>
  );
};

export default SortingInput;
