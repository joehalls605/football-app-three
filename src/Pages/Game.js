import React from 'react';
import Question from '../Components/Question';
import Timer from '../Components/Timer';
import footballersData from '../Data/FootballerData';
import Score from '../Components/Score';
import 'tailwindcss/tailwind.css';

const Game = ({ currentQuestion, handleAnswer, footballersData, setGameOver, gameOver, score, selectedLeague}) => {
  return (
    <div className='p-2'>
      <h1 className="flex text-3xl justify-center p-4">Guess the footballer</h1>
      <Score score={score} />
      <Question
        selectedLeague={selectedLeague} // holds value, premier league or championship
        questionData={currentQuestion}
        handleAnswer={handleAnswer}
        footballersData={footballersData}
      />
      <Timer setGameOver={setGameOver} gameOver={gameOver} />
    </div>
  );
};

export default Game;
