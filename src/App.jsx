import { useState } from "react";
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Result from "./components/Result"

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 10,
})


const inputisValid = userInput.duration >=1 ;

const handleChange = (inputIdentifier,newValue) => {
setUserInput((prevUserInput) => {
return {
    ...prevUserInput,
[inputIdentifier]: +newValue,
}

}) 
}
  
  return (
    <>

    <Header/>
    <Calculator handleChange={handleChange} userInput={userInput}/>
   {inputisValid && <Result input={userInput}/>}
   {!inputisValid && <p className="center">Can't be Calculated</p>}
  
    </>
  )
}

export default App
