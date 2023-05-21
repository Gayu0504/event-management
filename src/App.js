import logo from './logo.svg';
import './App.css';
import Event from './Event';
import CComponent from './CComponent';
import FCompnent from './FCompnent';
import Checkbox from './Checkbox';
import Clock from './Clock';
import ClockFunctionc from './ClockFunctionc';
import Sample from './Sample';

function App() {
  let friends=["abhi","rahul","ram","kavita"];
  function greet(){
    alert("hello");
  }
   
  return (
   <>
   
   <h1>Event Handling</h1>
   <button onClick={(e)=>{greet();}}>click me</button>
   <Event/>
   <hr/>
   <table border="1">
    <tr>
      <th>no</th>
      <th>Name</th>
    </tr>
    {friends.map((friend,index)=>{
      return(
        <tr>
          <td>{index+1}</td>
          <td>{friend}</td>
        </tr>
          
        
      )

    })}
   </table>
   <hr/>
   <Sample >This is sample component children</Sample>
   <hr/>
   <CComponent/>
   <hr/>

<hr/>
   <FCompnent/>
   <hr/>
   <Checkbox/>
   <hr/>
   <ClockFunctionc/>
   </>
  );
}

export default App;
