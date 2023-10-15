import styles from './CalculatorFormInputGroup.module.css';

import CalculatorFormInput from './CalculatorFormInput';
import { useState } from 'react';

function CalculatorFormInputGroup(props) {

  function onInputChangedLift(event) {
    props.onInputChangedLift(event);
  }

  return (
    <div className={`${styles['input-group']}`}>
      {props.data.map((x) => <CalculatorFormInput key={x.id} data={x} value={props.value} onInputChangedLift={onInputChangedLift}/>)}
    </div>
  );
}

export default CalculatorFormInputGroup;
