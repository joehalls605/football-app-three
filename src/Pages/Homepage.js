import React, { useState } from 'react';
import Game from './Game';

const Homepage = ({ setGameStarted }) => {
  const handleStartGame = (league) => {
    setGameStarted(league);
  };

  return (
    <div className='flex flex-col items-center p-10'>
      <h1 className='text-xl py-2'>Football Player Quiz</h1>
      <h2 className='text-xl py-2'>Choose a league:</h2>
      <button onClick={() => handleStartGame('Premier League')} className='bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600 my-2'>
        Premier League
      </button>
      <button onClick={() => handleStartGame('Championship')} className='bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600 my-2'>
        Championship
      </button>
    </div>
  );
};

export default Homepage;
