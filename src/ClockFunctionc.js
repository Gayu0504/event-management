

import { useState, useEffect } from "react";

function ClockFunctionc() {
    const [CurrentDateTime, setCurrentDateTime] = useState(new Date());
    //setInterval(()=>setCurrentDateTime(new Date()),1000);
    useEffect(() => {
        let setTime = () => {
            console.log("setTime is called");
            setCurrentDateTime(new Date());
        }
        let interval = setInterval(setTime, 1000);
        return () => {
            clearInterval(interval);
        }
    },
    []

);

    return (
        <div className="App">Current Date Time:{CurrentDateTime.toString()}</div>
    )
}
export default ClockFunctionc;