import React from 'react';

/**
 * LoadingSpinner component displayed while photos are being fetched.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24" role="status">
      <div className="relative w-16 h-16">
        <div className="w-16 h-16 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
      </div>
      <p className="mt-4 text-base font-medium text-slate-600 tracking-wide">
        Loading photos...
      </p>
    </div>
  );
}
