import styles from './CalculatorFormInput.module.css';
import { useState } from 'react';

function CalculatorFormInput(props) {

  function userInputChangeHandler(id,value) {
    console.log(`Valore cambiato ${id} - ${value}`);
    props.onInputChangedLift(id,value);
  }

  return (
    <p>
      <label className={styles.label} htmlFor={props.id}>{props.label}</label>
      <input className={styles.input} type={props.type} id={props.id} value={props.value} onChange={(event) => userInputChangeHandler(props.id,event.target.value)}/>
    </p>
  );
}

export default CalculatorFormInput;
