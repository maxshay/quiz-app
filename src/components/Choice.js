import React, { useState }from 'react';
import Button from 'react-bootstrap/Button';
import { Shake } from 'reshake';
const Choice = ({decodedChoice, choice, incrementQuestionCounter, answer}) => {

  const [color, setColor] = useState('primary');
  const [shake, setShake] = useState(false);

  const submitFromChoice = (e) => {
    e.preventDefault();  
    
    if (e.target.value === answer) {
        setColor('success');
        setTimeout(function() {
          incrementQuestionCounter();
        }, 800);
    } else {
      setShake(true);
      setColor('danger');
      setTimeout(() => {
        setShake(false);
      }, 500)
    }

  }

  return (
    <Shake         
      h={12}
      v={0}
      r={1}
      dur={180}
      int={20.4}
      max={100}
      fixed={true}
      fixedStop={true}
      freez={true}
      trigger={shake}
      active={shake} 
      className="mb-2"
    >
      <Button onClick={(e) => submitFromChoice(e)} value={choice} variant={color} block>{decodedChoice}</Button>
    </Shake>
  )
}


export default Choice;