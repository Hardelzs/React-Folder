
import { useState } from "react";
import "./App.css";

const App = () => {
  const [firstname, setFirstname] = useState("")
  const [secondname, setSecondname] = useState("")
  const [submitted, setSubmitted] = useState(null)

  const handlesubmit = (e) => {
    e.preventDefault;
    const data = {
      firstname,
      secondname
    }
    setSubmitted(data);
    
  }

  const handlereset = () => {
    setFirstname("")
    setSecondname("")
    submitted("")
  }
  return (
    <div className='flex'>
      <label htmlFor="">First Name</label>
      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

      <label htmlFor="">Second Name </label>
      <input type="text" value={secondname} onChange={(e) => setSecondname(e.target.value)}  />

      <button type="submit" onClick={(e) => handlesubmit(e)}>Submit</button>
      <button type="submit" onClick={(e) => handlereset(e)}>Reset</button>

      {submitted && (
    <div>
      <h1>Submitted Data</h1>
      <h1>firstname: {submitted.firstname}</h1>
    </div>
  )}
    </div>

    
  )


}

export default App