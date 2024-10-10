import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { HiUser} from 'react-icons/hi';

const SearchAndSort = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSortClick = () => {
    // Add sorting logic here
    console.log('Sorting triggered');
  };

  return (
    <div>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <HiUser className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="John Smith"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex bg-yellow-400 items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleSortClick}
        >
          <ArrowDownIcon className="h-5 w-5 text-gray-400" />
          
        </button>
      </div>
    </div>
  );
};

export default SearchAndSort;
