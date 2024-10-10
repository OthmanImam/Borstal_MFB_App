import React, { useState } from 'react';
import { FolderOpenFilled } from '@ant-design/icons';

const categories = [
  { id: 1, name: 'Total Payments Due' },
  { id: 2, name: 'May 2021 Reports' },
  { id: 3, name: 'Monthly Reports' },
  { id: 4, name: 'Loan Repayment' },
  // Add more categories as needed
];

const FileCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId); // Set the clicked category as active
  };

  return (
    <div className="mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 className="text-lg font-bold mb-4 text-red-900">File Categories</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            // icon={
              
            // }
            className={`category-btn py-3 w-full md:w-1/3 lg:w-1/5 box-border rounded-xl border-2 
              ${
                activeCategory === category.id
                  ? 'border-yellow-400 text-green-800'
                  : 'border-gray-300 text-gray-300'
              } hover:border-yellow-600 transition-all duration-300 ease-in-out`}
            onClick={() => handleCategoryClick(category.id)} // Handle active state on click
            style={{ fontFamily: 'Inter, sans-serif' }} // Ensure button text also uses Inter
          >
           {<FolderOpenFilled
                className={`${
                  activeCategory === category.id ? 'border-yellow-500' : 'border-green-500'
                }`}
              />} {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileCategories;
