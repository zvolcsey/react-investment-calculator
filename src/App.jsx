import { useState } from "react";
import UserInput from "./components/UserInput/UserInput"
import ResultsTable from "./components/ResultsTable/ResultsTable"
import { calculateInvestmentResults } from "./util/investment"

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [currentInvestment, setCurentInvestment] = useState(initialState);

  const result = calculateInvestmentResults(currentInvestment);

  function handleCurrentInvestmentChange(inputField, newValue) {
    setCurentInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [inputField]: Number(newValue),
      }
    });
  }

  return (
    <main>
      <UserInput
        currentInvestment={currentInvestment}
        onChangeInvesment={handleCurrentInvestmentChange}
      />
      <ResultsTable
        currentInvestment={currentInvestment}
        result={result}
      />
    </main>
  )
}

export default App
