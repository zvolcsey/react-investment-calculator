import "./ResultsTable.css";
import { formatter } from "../../util/investment";

export default function ResultsTable({ currentInvestment, result }) {
  const { initialInvestment, annualInvestment } = currentInvestment;
  
  const resultItems = result.map(data => {
    const investedCapital = Number(initialInvestment) + 
      data.year * Number(annualInvestment);
    const totalInterest = data.valueEndOfYear - Number(investedCapital);

    return (
      <tr key={data.year}>
        <td>{data.year}</td>
        <td>{formatter.format(data.valueEndOfYear)}</td>
        <td>{formatter.format(data.interest)}</td>
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
