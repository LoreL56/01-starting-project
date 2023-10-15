import styles from './CalculatorFormInput.module.css';
import { useState } from 'react';

function CalculatorFormInput(props) {

  const [currentInput,setCurrentInput] = useState({
    savings: 0,
    contribution: 0,
    expectedReturn: 0,
    duration:0
  });

  // const [currentSavings,setCurrentSavings] = useState(0);
  // const [yearlyContribution,setYearlyContribution] = useState(0);
  // const [expectedReturn,setExpectedReturn] = useState(0);
  // const [duration,setDuration] = useState(0);

  function userInputChangeHandler(event) {
    props.onInputChangedLift(event);
  }

  // function userInputChangeHandler(event) {

  //   console.log("ELEMENTO:"+event.target.id);
  //   console.log("VALORE_PASSATO="+event.target.value);
  //   if(event.target.id === 'current-savings')
  //   {
  //     //setCurrentSavings(event.target.value);
      
  //     setCurrentInput((prevState) => {
  //       return { ...prevState, savings: event.target.value};
  //     });
  //   }
  //   else if(event.target.id === 'yearly-contribution')
  //   {
  //     //setYearlyContribution(event.target.value);

  //     setCurrentInput((prevState) => {
  //       return { ...prevState, contribution: event.target.value};
  //     });
  //   }
  //   else if(event.target.id === 'expected-return')
  //   {
  //     // setExpectedReturn(event.target.value);

  //     setCurrentInput((prevState) => {
  //       return { ...prevState, expectedReturn : event.target.value };
  //     });
  //   }
  //   else if(event.target.id === 'duration')
  //   {
  //     // setDuration(event.target.value);

  //     setCurrentInput((prevState) => {
  //       return { ...prevState, duration: event.target.value };
  //     });
  //   }

  //   console.log(currentInput);
  // }

  // function CalcolaValue(id)
  // {
  //   if(id === 'current-savings')
  //   {
  //     return currentInput.savings;
  //   }
  //   else if(id === 'yearly-contribution')
  //   {
  //     return currentInput.contribution;
  //   }
  //   else if(id === 'expected-return')
  //   {
  //     return currentInput.expectedReturn;
  //   }
  //   else if(id === 'duration')
  //   {
  //     return currentInput.duration;
  //   }
  // }

  return (
    <p>
      <label className={styles.label} htmlFor={props.data.id}>{props.data.label}</label>
      <input className={styles.input} type={props.data.type} id={props.data.id} value={props.data.value} onChange={userInputChangeHandler}/>
    </p>
  );
}

export default CalculatorFormInput;
