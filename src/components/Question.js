import React from 'react';

const entities = require("entities");

const Question = ({question}) =>  {

  const questionHeader = entities.decodeHTML(question);
  return (
    
    <div className="quiz__question-title text-center mb-5">
      <h5>{questionHeader}</h5>
    </div>
  )
}

export default Question;
