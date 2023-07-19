import React, { useState } from 'react';
import footballersData from './Data/FootballerData';
import Question from './Components/Question';
import Timer from './Components/Timer';
import Homepage from './Pages/Homepage';
import checkMarkIcon from './Icons/check-mark.png';
import Score from './Components/Score';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);

  

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setSelectedLeague(''); // Reset selectedLeague when restarting the game
  };

  const handleTimerFinish = () => {
    setGameOver(true);
  };

  const handleStartGame = (league) => {
    setSelectedLeague(league);
  };

  const renderGame = () => {
    if (!selectedLeague) {
      return <Homepage setGameStarted={handleStartGame} />;
    }

    if (gameOver) {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl p-4">Game Over!</h2>
          <p className="text-3xl p-4">Your score: {score}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      );
    }

    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);

    if (currentQuestionIndex >= filteredFootballersData.length) {
      setGameOver(true);
      return null;
    }

    const currentQuestion = filteredFootballersData[currentQuestionIndex];

    return (
      <div>
        <Question
          questionData={currentQuestion}
          handleAnswer={handleAnswer}
          footballersData={filteredFootballersData}
          selectedLeague={selectedLeague}
          answerCorrect={answerCorrect}
          setAnswerCorrect={setAnswerCorrect}
        />
         {answerCorrect && (
        <div className='flex flex-col items-center'>
          <img
            src={checkMarkIcon}
            alt="Correct"
            className="w-4 h-4 inline-block ml-2"
          />
        </div>
      )}
        <Score score={score}/>
        <Timer setGameOver={setGameOver} gameOver={gameOver} />
      </div>
    );
  };

  return <div>{renderGame()}</div>;
};

export default App;
