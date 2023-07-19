// Hint.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const Hint = ({ nationality, position }) => {
  return (
    <div className='font-semibold text-lg flex justify-center pb-4'>
      <p className='mr-5'>Nationality: {nationality}</p>
      <p>Position: {position}</p>
      {/* Display the correct footballer name */}
    </div>
  );
};

export default Hint;
