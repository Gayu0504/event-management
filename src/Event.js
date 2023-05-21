import React from "react";
class Event extends React.Component{
    constructor(props){
            super(props);
            
    }
callme=(e)=>{
    alert("hi");
    console.log(e.target);
}



render(){
    return(
        <div className="App">
            <button onClick={this.callme}>click me</button>
        </div>
    )

}


}
export default Event;