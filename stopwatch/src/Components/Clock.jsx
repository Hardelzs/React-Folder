import { useEffect, useState } from "react"


const Clock = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval (() => {
      setDate(new Date());
    }, 1000);
    return() => clearInterval(timer);
  },[]);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{date.toLocaleTimeString()}</p>
      <h2>Current Date</h2>
      <p>{date.toLocaleDateString()}</p>
    </div>
  )
}

export default Clock