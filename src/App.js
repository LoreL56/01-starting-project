import CalculatorForm from './components/Form/CalculatorForm';
import CalculatorTable from './components/Output/CalculatorTable';
import Header from './components/header/Header';

import { useState } from 'react';

function App() {

  const [userInput,setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if(userInput)
  {
    let currentSavings = userInput['current-savings']; 
    const yearlyContribution = userInput['yearly-contribution']; 
    
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });  
    }
  }

  function onReset()
  {
    setUserInput(null);
  }
 
  return (
    <div>
      <Header />
    
      <CalculatorForm onReset={onReset} onCalculate={calculateHandler}/>

      {!userInput && <p style={{textAlign: 'center'}}>UserInput vuoto.</p>}
      {userInput && <CalculatorTable data={yearlyData} initialInvestment={userInput['current-savings']}/> }
    </div>
  );
}

export default App;
