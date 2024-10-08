const Heading = () => {

  
  const intro = () => {
      alert("message")
  }
  
  return (
    <>
    <div className="flex space-x-9 items-center place-content-center bg-red-500">
      <h1 className="text-3xl font-mono ">Hardelz</h1>
      <ul className="flex space-x-9 p-4 text-emerald-800" >
        <li>Home</li>
        <li>Home</li>
      </ul>
      <h1 className="text-4xl">&#9760;</h1>
    </div>
    <div className="p-4 text-white grid space-x-4">
      <h1 className="text-4xl items-center place-content-center flex p-6 font-mono">Hardelz Questionnaire  </h1>
      <label htmlFor="">FullName</label>
      <input type="text" placeholder="Your-name" className=" h-12 p-2 rounded-full  "/> <br />

      <label htmlFor="">School</label>
      <input type="text" placeholder="Your-name" className=" h-12 p-2 rounded-full "/> <br />

      <label htmlFor="">Level</label>
      <input type="number" placeholder="Your-name" className=" h-12 p-2 rounded-full "/> <br />

      <button type="submit" onClick={()=>{intro()}} className="w-1/2">Submit</button>

    </div>

    </>
              
  );
};

export default Heading;
