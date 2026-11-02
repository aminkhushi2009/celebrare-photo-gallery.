import React from 'react';

/**
 * SearchBar component for filtering photos by photographer name in real time.
 *
 * @param {{ value: string, onChange: Function }} props
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search photos by photographer name..."
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 shadow-sm"
        />
      </div>
    </div>
  );
}
