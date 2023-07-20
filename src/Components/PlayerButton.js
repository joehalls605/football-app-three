import React, { useState } from 'react';
import checkMarkIcon from '../Icons/check-mark.png';

const PlayerButton = ({ name, correctAnswer, setAnswerCorrect, answerCorrect, score, setScore, setCurrentQuestionIndex, currentQuestionIndex, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = () => {
    const isCorrect = name === correctAnswer;
    setSelectedAnswer(isCorrect ? 'correct' : 'incorrect');
    handleAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question after a delay
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset selectedAnswer when moving to the next question
    }, 2000);
  };

  const buttonClass = `bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600 ${
    selectedAnswer === 'correct' ? 'bg-green-500' : selectedAnswer === 'incorrect' ? 'bg-red-500' : ''
  }`;

  return (
    <div>
      <button className={buttonClass} onClick={handleClick} disabled={selectedAnswer}>
        {name}
      </button>
    </div>
  );
};

export default PlayerButton;
