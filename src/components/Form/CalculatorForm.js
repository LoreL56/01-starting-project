import styles from "./CalculatorForm.module.css";

import CalculatorFormAction from "./CalculatorFormAction";
import CalculatorFormInput from "./CalculatorFormInput";

import { useState, useEffect } from "react";

const initialInput = {
  'current-savings': 4,
  'yearly-contribution': 3,
  'expected-return': 20,
  'duration': 10
};

function CalculatorForm(props) {

  const [currentInput,setCurrentInput] = useState(initialInput);

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  function onInputChangedLift(id,value)
  {
    setCurrentInput((prevState) => {
      return {
      ...prevState,
      [id] : +value
      };      
    });

    console.log("SET");
    console.log(currentInput);
    // console.log("DELAY");
    // delay(10000).then(() => console.log(currentInput));
  }

  function submitFormHandler(event) 
  {
    event.preventDefault();
    console.log("SUBMIT");
    console.log(currentInput);
    props.onCalculate(currentInput);
  }

  function onReset()
  {
    props.onReset();
  }

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={`${styles['input-group']}`}>
        <CalculatorFormInput id="current-savings" label="Current Savings ($)" type="number" value={currentInput['current-savings']} onInputChangedLift={onInputChangedLift}/>
        <CalculatorFormInput id="yearly-contribution" label="Yearly Savings ($)" type="number" value={currentInput['yearly-contribution']} onInputChangedLift={onInputChangedLift}/>
      </div>
      <div className={`${styles['input-group']}`}>
        <CalculatorFormInput id="expected-return" label="Expected Interest (%, per year)" type="number" value={currentInput['expected-return']} onInputChangedLift={onInputChangedLift}/>
        <CalculatorFormInput id="duration" label="Investment Duration (years)" type="number" value={currentInput['duration']} onInputChangedLift={onInputChangedLift}/>
      </div>
      <CalculatorFormAction onReset={onReset}/>
    </form>
  );
}

export default CalculatorForm;
