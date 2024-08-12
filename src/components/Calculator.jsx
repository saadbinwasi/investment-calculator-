


function Calculator({handleChange,userInput}) {

  return (
    <>
    <section id='user-input'>
        <div className='input-group'>
            {/* Initial Investment   */}
            <p>
            <label>Initial Investment  </label>
            <input type='number' value={userInput.initialInvestment} onChange={(e) => handleChange('initialInvestment',e.target.value)} required/>
            </p>
            {/* Anuual Investment */}
            <p>
            <label>Anuual Investment </label>
            <input type='number' value={userInput.annualInvestment} onChange={(e) => handleChange('annualInvestment',e.target.value)} required />
            </p>
            </div>
            <div className='input-group'>
            {/* Expected Return */}
            <p>
            <label>Expected Return </label>
            <input type='number' value={userInput.expectedReturn} onChange={(e) => handleChange('expectedReturn',e.target.value)} required/>
            </p>
            {/* Duration */}
            <p>
            <label>Duration </label>
            <input type='number' value={userInput.duration} onChange={(e) => handleChange('duration',e.target.value)} required/>
            </p>
            </div>

          
          

        
    </section>


</>
  )
}

export default Calculator
