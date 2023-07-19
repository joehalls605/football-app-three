// Score.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const Score = ({ score }) => {
  return (
    <div className="flex text-3xl justify-center p-4">
      <p className="text-lg bg-gray-200 text-black px-4 py-2 rounded mx-2 font-semibold">
        Score: {score}
      </p>
    </div>
  );
};

export default Score;
