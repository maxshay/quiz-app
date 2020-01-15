import React from 'react';


import Question from './Question';
import Choices from './Choices';
import SubmitButton from './SubmitButton';


const Quiz = ({question, choices, answer, incrementQuestionCounter, takingQuiz, loading, questionCounter}) => {
 

    const submitAnswer = (e) => {
        e.preventDefault();
        let chosenAnswer = e.target.value;
        if (chosenAnswer === answer) {
            incrementQuestionCounter();
        }
    }

    return (
        <div className="w-100">
            <div className="quiz__heading text-center mt-4 w-100">
                {takingQuiz ? (<h2>Question {loading ? "..." : questionCounter}</h2>) : (<h2>Ready to take a quiz!</h2>)}
            </div>
            <Question question={question}/>
            <Choices 
                choices={choices} 
                submitAnswer={submitAnswer} 
                incrementQuestionCounter={incrementQuestionCounter} 
                answer={answer}
            />
            <SubmitButton /> 
        </div>
    )
}

export default Quiz;