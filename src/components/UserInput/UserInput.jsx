import "./UserInput.css";

export default function UserInput({ currentInvestment, onChangeInvesment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment-input" >Initial Investment</label>
          <input
            type="number"
            id="initial-investment-input"
            name="initial-investment"
            required
            value={currentInvestment.initialInvestment}
            onChange={(event) => onChangeInvesment("initialInvestment", Number(event.target.value))}
          />
        </p>
        <p>
          <label htmlFor="annual-investment-input" >Annual Investment</label>
          <input
            type="number"
            id="annual-investment-input"
            name="annual-investment"
            required
            value={currentInvestment.annualInvestment}
            onChange={(event) => onChangeInvesment("annualInvestment", Number(event.target.value))}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return-input">Expected Return</label>
          <input
            type="number"
            id="expected-return-input"
            name="expected-return"
            required
            value={currentInvestment.expectedReturn}
            onChange={(event) => onChangeInvesment("expectedReturn", Number(event.target.value))}
          />
        </p>
        <p>
          <label htmlFor="duration-input">Duration</label>
          <input
            type="number"
            id="duration-input"
            name="duration"
            required
            value={currentInvestment.duration}
            onChange={(event) => onChangeInvesment("duration", Number(event.target.value))}
          />
        </p>
      </div>
    </div>
  )
}