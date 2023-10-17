import styles from "./CalculatorTable.module.css";

function CalculatorTable(props) {
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const columnTitles = [
    {id:1,value:"Year"},
    {id:2,value:"Total Savings"},
    {id:3,value:"Interest (Year)"},
    {id:4,value:"Total Interest"},
    {id:5,value:"Invested Capital"},
  ];

  return (
    <div>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className={styles.result}>
        <thead>
          <tr>
            {columnTitles.map((x) => (
              <th key={x.id}>{x.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>   
          {props.data.map((x) => (
            <tr key={x.year}>
              <td>{x.year}</td>
              <td>{formatter.format(x.savingsEndOfYear)}</td>
              <td>{formatter.format(x.yearlyInterest)}</td>
              <td>{formatter.format(x.savingsEndOfYear - props.initialInvestment - x.yearlyContribution*x.year)}</td>
              <td>{formatter.format(props.initialInvestment + x.yearlyContribution*x.year)}</td>
            </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
}

export default CalculatorTable;
