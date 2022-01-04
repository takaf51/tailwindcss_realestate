import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label}) => {
  return (
    <button className=' bg-yellow-500 px-3 py-2 rounded-lg'>
      {label}
    </button>
  );
};

