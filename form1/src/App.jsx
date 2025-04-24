import { useState } from "react";
import "./App.css";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [submitted, setSubmitted] = useState(null);
  const [submittedCount, setsubmittedcount] = useState(0)


  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      secondname,
    };
    setsubmittedcount(submittedCount +1)
    setSubmitted(data);
  };

  const handlereset = () => {
    setFirstname("");
    setSecondname("");
    submitted(null);
    setsubmittedcount(0)
  };

  const handleCopy = () => {
    if (submitted) {
      const textCopy = `First Name : ${submitted.firstname}, Second Name : ${submitted.secondname}`;
      navigator.clipboard.writeText(textCopy).then(() => {
        alert("Copied to clipboard");
      });
    }

    if(!submitted){
      alert("no data bro")
    }
  };

  return (
    <div className="flex">
      <label htmlFor="">First Name</label>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label htmlFor="">Second Name </label>
      <input
        type="text"
        value={secondname}
        onChange={(e) => setSecondname(e.target.value)}
      />

      <button type="submit" onClick={(e) => handlesubmit(e)}>
        Submit
      </button>
      <button type="submit" onClick={handlereset}>
        Reset
      </button>

      <div className="count">
        Submited Count : {submittedCount}
      </div>



      {submitted && (
        <div className="submit">
          <h1>Submitted Data</h1>
          <h1>firstName: {submitted.firstname}</h1>
          <h1>SecondName: {submitted.secondname}</h1>
          <button onClick={handleCopy}>Copy To Clipboard</button>
        </div>
      )}
    </div>
  );
};

export default App;
