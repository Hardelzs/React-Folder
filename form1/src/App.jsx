import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [firstname, setFirstName] = useState("")
  const [secondname, setsecondname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault;
    const data = {
      firstname,
      secondname
    }
    console.log("form:", data);
    
  }

  const handleReset = () => {
    setFirstName("")
    setsecondname("")
  }
  return (
    <div className='flex'>
      <label htmlFor="">First name</label>
      <input type="text" name="" id="" value={firstname} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="">First name</label>
      <input type="text" name="" id="" value={secondname} onChange={(e) => setsecondname(e.target.value)} />

      <label htmlFor="">First name</label>
      <input type="text" name="" id="" value={secondname} onChange={(e) => setsecondname(e.target.value)} />

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <button onClick={(e) => handleReset(e)}>Reset</button>
    </div>
  )
}

export default App