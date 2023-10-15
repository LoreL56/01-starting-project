import styles from "./CalculatorForm.module.css";

import CalculatorFormInputGroup from "./CalculatorFormInputGroup";
import CalculatorFormAction from "./CalculatorFormAction";

import { useState } from "react";

function CalculatorForm(props) {
  
  const data = [
    {
      id:1,
      values: [
        {
          id: "current-savings",
          label: "Current Savings ($)",
          type: "number"
        },
        {
          id: "yearly-contribution",
          label: "Yearly Savings ($)",
          type: "number"
        }
      ]
    },
    {
      id:2,
      values: [
        {
          id: "expected-return",
          label: "Expected Interest (%, per year)",
          type: "number"
        },
        {
          id: "duration",
          label: "Investment Duration (years)",
          type: "number"
        }
      ]
    }
  ];

  const [currentInput,setCurrentInput] = useState({});

  const [currentSavings,setCurrentSavings] = useState(0);
  const [yearlyContribution,setYearlyContribution] = useState(0);
  const [expectedReturn,setExpectedReturn] = useState(0);
  const [duration,setDuration] = useState(0);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  function onInputChangedLift(event)
  {
    if(event.target.id === 'current-savings')
    {
      setCurrentSavings((prev) => event.target.value);
    }
    else if(event.target.id === 'yearly-contribution')
    {
      setYearlyContribution(event.target.value);
    }
    else if(event.target.id === 'expected-return')
    {
      setExpectedReturn(event.target.value);
    }
    else if(event.target.id === 'duration')
    {
      setDuration(event.target.value);
    }
  }

  function submitFormHandler(event) 
  {
    event.preventDefault();
    console.log('calculatorForm:');
    
    setCurrentInput({
      savings: currentSavings,
      contribution: yearlyContribution,
      return: expectedReturn,
      duration: duration
    });
    
    console.log(currentInput);
  }

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {data.map((x) => (
        <CalculatorFormInputGroup key={x.id} data={x.values} onInputChangedLift={onInputChangedLift}/>
      ))}

      <CalculatorFormAction />
    </form>
  );
}

export default CalculatorForm;
