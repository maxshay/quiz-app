// React
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles and Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import './fonts/Roboto-Regular.ttf'
import './App.scss';

// Components
import Quiz from './components/Quiz'

const url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy';

const App = () => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [takingQuiz, setTakingQuiz] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(1);
  
  useEffect(() => {

    function getQuestion() {
    var questionFromCall = null;
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    axios.get(url)
        .then(res => {
            questionFromCall =  {
                question: res.data.results[0].question,
                answer:res.data.results[0].correct_answer,
                choices: res.data.results[0].incorrect_answers
            }
            questionFromCall.choices.push(res.data.results[0].correct_answer);
            shuffle(questionFromCall.choices);
            setQuestion(questionFromCall);
            if (question) console.log(question);
            setLoading(false);
        })
        .catch(err => {console.log(err)})
    //if (question) console.log(question);
    };

    setTimeout(function() {
      if (loading) {
        getQuestion();
      }
  }, 1000);
  }, [loading, questionCounter])

  const nextQuestion = () => {
    if (!takingQuiz) {
      setTakingQuiz(true);
    }
    setLoading(true);
  }

  const incrementQuestionCounter = () => {
    setQuestionCounter(questionCounter + 1);

    nextQuestion();
  }
  return (
    <Container>
      <div className="quiz mx-auto">
        <div className="quiz__container mx-auto">
        <div className="quiz__actual-quiz">
          {question ? (
            (loading ? (
              <div className="w-100 text-center">
              <Spinner size="md" variant="primary" animation="border" role="status" >
                <span className="sr-only">Loading...</span>
              </Spinner>
              </div>
            ) : (
              <Quiz {...question} 
                incrementQuestionCounter={incrementQuestionCounter}  
                questionCounter={questionCounter} 
                loading={loading} 
                takingQuiz={takingQuiz}
              />
            ))
            ) : (
            <div className="w-100">
            <div className="quiz__heading text-center mt-4 w-100">
              <h2>Ready to take a quiz!</h2>
            </div>
            <div className="quiz__start-button text-center mx-auto">
              <Button 
                onClick={nextQuestion} 
                disabled={loading} 
                className="m-3 px-4 py-2 postition-relative"
                variant="primary"
              >
                {loading ? (
                  <Spinner size="sm" variant="white" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  <span className="">Start</span>
                ) 
                }
              </Button>
            </div>
            </div>
          )}

        </div>
        
      </div>
      </div>
    </Container>
  );
  
  
}

export default App;
