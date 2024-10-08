import { useEffect, useState } from "react"


const Stopwatch = () => {

    // state to store time
    const [time, setTime] = useState(0)

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

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

    //method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

  return (
    <div className="stopwatch-container bg-[#000] text-white h-screen">
        <p className="stopwatch-time text-8xl md:text-9xl
         text-center p-10">
            {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
        </p>
        <div className="stopwatch-buttons flex items-center place-content-center">
            <button className="stopwatch-button w-32 m-4 p-2 sm:p-4 cursor-pointer bg-green-600 " onClick={startAndStop}>{isRunning ? "Stop" : "Start"}
            </button>
            <button className="stopwatch-button bg-red-600 p-2 sm:p-4 cursor-pointer w-32" onClick={reset}>Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch