import React from 'react';
import FileTable from '../components/FileTable';
import FileCategories from '../components/FileCategories';

const FileComponent = () => {
  return (
    <div className="p-6 gap-8 flex flex-col">
      <FileCategories />
      <FileTable />
    </div>
  );
};

export default FileComponent;
