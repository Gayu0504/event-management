import { useState } from "react";

function FCompnent() {

    let [date, setDate] = useState(Date());
    let [name, setName] = useState("hello");


    setInterval(() => {
        setDate(Date());

    }, 1000);


    return (

        < div className="App">
            <h1>Function Component</h1>
            <h3>{date}</h3>
            <input tyep="text" onChange={(e) => { setName(e.target.value); }} value={name} />
            <div>{name}</div>
        </div>
    )
}


export default FCompnent;