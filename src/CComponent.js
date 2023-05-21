import React from "react";
class CComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            date:Date(),
            name:"hello"
        }
        setInterval(() => {
            this.setState((state,props)=>(
                state.date=Date()
            ));
        }, 1000);

    }
setName(e){
    e.preventDefault();
    let value = e.target.value;
    this.setState((state,props)=>(
        state.name= value
    )
    )

}

    render() {
        return (
            <div className="App">
                <h1>class Component</h1>
                <h2></h2>
                <input type="text" onChange={(e)=>{
                    this.setName(e)  }} value={this.state.name} />
                    <div>{this.state.name}</div>
            </div>
        )
    }
}
export default CComponent;