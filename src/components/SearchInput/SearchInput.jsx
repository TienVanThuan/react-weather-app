import React from 'react';

const SearchInput = () => {
  return (
    <form className="max-w-lg">
      <div className="flex shadow-xs -space-x-0.5">
        <input
          type="search"
          placeholder="Search for city or address"
          className="w-64 px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-l-md text-heading text-sm focus:ring-brand focus:border-brand block px-3 py-2.5 placeholder:text-body"
        />
        <button
          type="submit"
          className="inline-flex items-center text-white bg-indigo-800	 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-r-md text-sm px-4 py-2.5 focus:outline-none"
        >
          <svg
            className="w-4 h-4 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
