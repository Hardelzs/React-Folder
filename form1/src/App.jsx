import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [firstname, setFirstName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault;
    const data = {
      firstname
    }
    console.log("form:", data);
    
  }

  const handleReset = () => {
    setFirstName("")
  }
  return (
    <div>
      <label htmlFor="">First name</label>
      <input type="text" name="" id="" value={firstname} onChange={(e) => setFirstName(e.target.value)} />

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <button onClick={(e) => handleReset(e)}>Reset</button>
    </div>
  )
}

export default App