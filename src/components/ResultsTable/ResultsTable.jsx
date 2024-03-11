import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function ResultsTable({ currentInvestment }) {
  const { initialInvestment, annualInvestment } = currentInvestment;

  const resultsData = calculateInvestmentResults(currentInvestment);
  
  const resultItems = resultsData.map(yearData => {
    const investedCapital = initialInvestment + 
      yearData.year * annualInvestment;
    const totalInterest = yearData.valueEndOfYear - investedCapital;

    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    )
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest &#40;Year&#41;</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultItems}
      </tbody>
    </table>
  )
}
