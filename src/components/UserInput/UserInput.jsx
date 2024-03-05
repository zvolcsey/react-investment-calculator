import "./UserInput.css";

export default function UserInput() {
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
          />
        </p>
        <p>
          <label htmlFor="annual-investment-input" >Annual Investment</label>
          <input
            type="number"
            id="annual-investment-input"
            name="annual-investment"
            required
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
          />
        </p>
        <p>
          <label htmlFor="duration-input">Duration</label>
          <input
            type="number"
            id="duration-input"
            name="duration"
            required
          />
        </p>
      </div>
    </div>
  )
}