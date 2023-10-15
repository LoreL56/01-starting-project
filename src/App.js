import logo from './assets/investment-calculator-logo.png';
import CalculatorForm from './components/Form/CalculatorForm';
import CalculatorTable from './components/Output/CalculatorTable';

import { useState } from 'react';

function App() {

  const [tableData,setTableData] = useState([]);

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    
      <CalculatorForm/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculatorTable/>
    </div>
  );
}

export default App;
