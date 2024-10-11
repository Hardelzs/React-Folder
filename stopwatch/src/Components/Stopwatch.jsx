import { useEffect, useState } from "react"


const Stopwatch = () => {

    // state to store time
    const [time, setTime] = useState(0)

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

      // State to store lap times
  const [lapTimes, setLapTimes] = useState([]);

    useEffect(() =>{
        let Interlaid;
        if(isRunning){
            //setting time from 0 to 1 every 10 millisecond using Javascript setInterval method
            Interlaid = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(Interlaid);
    }, [isRunning, time])

    //hours val
    const hours = Math.floor(time / 360000);

    //minutes cal
    const minutes = Math.floor((time % 360000) / 6000);

    //seconds cal
    const seconds = Math.floor((time % 6000) / 100)

    //milliseconds cal
    const milliseconds = time % 100;

    //method to start and stop timer
    const startAndStop =() => {
        setIsRunning(!isRunning)
    }

  // Method to save a lap time
  // Method to save a lap time
  const lap = () => {
    if (isRunning) {
      const lapTime = ` ${ hours} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds.toString().padStart(2, "0")}`;
      setLapTimes([...lapTimes, lapTime]);
    }
  };

    //method to reset timer back to 0
    const reset = () => {
        setTime(0);
        setLapTimes([]);
    };

  return (
    <div className="stopwatch-container bg-[#000] text-white h-screen">

        <h1 className="text-4xl font-mono text-center p-4">Stopwatch</h1>
        <p className="stopwatch-time text-4xl md:text-9xl
         text-center p-10">
            {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
        </p>
        <div className="stopwatch-buttons flex items-center place-content-center">
            <button className="stopwatch-button w-32 m-4 p-2 sm:p-4 cursor-pointer bg-green-600 " onClick={startAndStop}>{isRunning ? "Stop" : "Start"} </button>
            <button className="stopwatch-button bg-red-600  p-2 sm:p-4 cursor-pointer w-32" onClick={reset}>Reset</button>
            <button className="stopwatch-button bg-gray-700 m-4 p-2 sm:p-4 cursor-pointer w-32" onClick={lap}>Lap</button>
        </div>
        <div className="lap-times">
        <h2 className="text-4xl text-center p-6">Lap Times</h2>
        <ul className="bg-black">
          {lapTimes.map((lapTime, index) => (
            <li className="text-2xl md:text-4xl text-center space-x-8 flex items-center place-content-center" key={index}> #{index + 1} :<li>{lapTime}</li> </li>

          ))}
        </ul>
      </div>
        <h1 className=" text-1xl md:text-2xl text-center text-emerald-600 bg-black p-8">created with &#9825; by hardelz😎</h1>

    </div>
  )
}

export default Stopwatch