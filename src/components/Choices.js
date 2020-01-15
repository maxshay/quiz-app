import React, { useState } from 'react';
import Choice from './Choice';
const entities = require("entities");

const Choices = ({choices, submitAnswer, incrementQuestionCounter, answer}) => {
  let choicesMarkup = [];
  const [disabled, setDisabled] = useState(false);

  const setDisabledFunc = () => {
    setDisabled(true);
  }

  if (choices) {
    choices.forEach((choice, i) => {
      const decodedChoice = entities.decodeHTML(choice);
      choicesMarkup.push(<Choice 
                            key={i}   
                            choice={choice} 
                            decodedChoice={decodedChoice} 
                            submitAnswer={submitAnswer}
                            disabled={disabled}
                            setDisabledFunc={setDisabledFunc}
                            incrementQuestionCounter={incrementQuestionCounter} 
                            answer={answer}
                          />
                        );
    });
  }
  return (
    <div className="quiz__choices w-100">
      {choicesMarkup}
    </div>  
  )
}

export default Choices;