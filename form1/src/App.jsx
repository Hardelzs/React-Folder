
import { useState } from "react";
import "./App.css";

const App = () => {
  const [firstname, setFirstname] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault;
    const data = {
      firstname
    }
    console.log("Form", data);
    
  }

  const handlereset = () => {
    setFirstname("")
  }
  return (
    <div className='flex'>
      <label htmlFor="">First Name</label>
      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

      <label htmlFor="">Second Name </label>
      <input type="text"   />

      <button type="submit" onClick={(e) => handlesubmit(e)}>Submit</button>
      <button type="submit" onClick={(e) => handlereset(e)}>Reset</button>
    </div>
  )
}

export default App