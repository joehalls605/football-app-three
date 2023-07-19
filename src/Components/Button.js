import React, { useState } from 'react';
import checkMarkIcon from '../Icons/check-mark.png';

const Button = ({ name, correctAnswer, handleAnswer, answerCorrect, setAnswerCorrect }) => {

  const handleClick = () => {
    const isCorrect = name === correctAnswer;
    if(isCorrect){
      setAnswerCorrect(true);
    }
    handleAnswer(isCorrect);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-600"
        onClick={handleClick}
        disabled={answerCorrect} // Disable the button after clicking to prevent multiple clicks
      >
        {name}
      </button>
     
    </div>
  );
};

export default Button;
