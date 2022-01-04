import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label}) => {
  return (
    <button className=' bg-yellow-700 text-white text-3xl font-sans font-semibold tracking-wide px-4 py-5 rounded-lg'>
      {label}
    </button>
  );
};