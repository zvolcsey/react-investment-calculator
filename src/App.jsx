import { useState } from "react";
import UserInput from "./components/UserInput/UserInput"
import ResultsTable from "./components/ResultsTable/ResultsTable"

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [currentInvestment, setCurentInvestment] = useState(initialState);

  const inputIsValid = 
  currentInvestment.initialInvestment >= 1 &&
  currentInvestment.annualInvestment >= 1 &&
  currentInvestment.expectedReturn >= 1 &&
  currentInvestment.duration >= 1;

  function handleCurrentInvestmentChange(inputField, newValue) {
    setCurentInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [inputField]: newValue,
      }
    });
  }

  return (
    <main>
      <UserInput
        currentInvestment={currentInvestment}
        onChangeInvesment={handleCurrentInvestmentChange}
      />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <ResultsTable currentInvestment={currentInvestment} />}
    </main>
  )
}

export default App
