// Question.js
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Hint from './Hint';
import Button from './Button';
import Score from './Score';

const Question = ({ questionData, handleAnswer, footballersData, selectedLeague, answerCorrect, setAnswerCorrect}) => {
  const { name, nationality, position } = questionData;
  const [correctFootballer, setCorrectFootballer] = useState(null);
  const [footballerButtons, setFootballerButtons] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateFootballerButtons();
  }, [questionData, selectedLeague]);

  const generateFootballerButtons = () => {

    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);
    console.log(selectedLeague)


    const randomIndex = Math.floor(Math.random() * filteredFootballersData.length);
    const correctFootballer = filteredFootballersData[randomIndex];
    const shuffledFootballers = filteredFootballersData
      .filter(
        (footballer) =>
          footballer.name !== questionData.name &&
          footballer.name !== correctFootballer.name
      )
      .sort(() => Math.random() - 0.5);
    const selectedFootballers = [correctFootballer, ...shuffledFootballers.slice(0, 3)];
    const randomisedSelectedFootballers = shuffleArray(selectedFootballers);
    setCorrectFootballer(correctFootballer);
    setFootballerButtons(randomisedSelectedFootballers);
    setScore(0); // Reset score when generating new buttons
  };


  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  return (
      <div className="flex flex-col items-center p-10">
        {correctFootballer && (
          <Hint
            nationality={correctFootballer.nationality}
            position={correctFootballer.position} // Pass the correct footballer name
          />
        )}
        <div className="grid grid-cols-2 gap-4">
          {footballerButtons.map((footballer, index) => (
            <Button
              key={index}
              name={footballer.name}
              correctAnswer={correctFootballer.name}
              setScore={setScore}
              score={score}
              handleAnswer={handleAnswer}
              setAnswerCorrect={setAnswerCorrect}
            />
          ))}
        </div>
      </div>
  );
};

export default Question;
