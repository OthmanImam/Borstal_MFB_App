import React, { useState } from 'react';  

const CustomCheckbox = () => {  
  const [checked, setChecked] = useState(false);  

  return (  
    <label className="flex items-center my-4 mx-3 cursor-pointer">  
      <input   
        type="checkbox"   
        className="hidden"   
        checked={checked}   
        onChange={() => setChecked(!checked)}   
      />  
      <div   
        className={`w-5 h-5 border-2 border-gray-300 rounded-sm flex items-center justify-center mr-2   
                    ${checked ? 'bg-green-900 border-transparent' : ''}`}  
      >  
        {checked && (  
          <svg  
            className="w-4 h-4 stroke-white"  
            viewBox="0 0 24 24"  
            fill="none"  
            xmlns="http://www.w3.org/2000/svg"  
          >  
            <path  
              strokeLinecap="round"  
              strokeLinejoin="round"  
              strokeWidth="2"  
              d="M4 12l6 6L20 6"  
            />  
          </svg>  
        )}  
      </div>  
      <span className="text-gray-400">Remember me</span>  
    </label>  
  );  
};  

export default CustomCheckbox;