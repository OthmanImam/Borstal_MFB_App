import React from 'react';
import { Button } from 'antd';
import { FolderOutlined } from '@ant-design/icons';

const categories =[
  { id: 1, name: 'Total Payments Due' },
  { id: 2, name: 'May 2021 Reports' },
  { id: 3, name: 'Monthly Reports' },
  { id: 4, name: 'Loan Repayment' },
  // Add more categories as needed
]

const FileCategories = () => {
  return (
    <div className="mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 className="text-lg font-bold mb-4 text-red-900">File Categories</h2>
      <div className="flex flex-wrap justify-between gap-1 lg:justify-between md:justify-between">
        {categories.map(category => (
          <Button
            key={category.id}
            icon={<FolderOutlined />}
            className="category-btn w-1/5 py-7 box-border rounded-xl border-2 border-gray-300 text-green-500 hover:border-yellow-800"
            style={{ fontFamily: 'Inter, sans-serif' }} // Ensure button text also uses Inter
          >
            {category.name}
          </Button>
        ))}
        {/* Add more category buttons as needed */}
       
      </div>
    </div>
  );
};

export default FileCategories;
