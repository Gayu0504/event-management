function Sample(props){
    return(
        <>
        <div className="App">
            <h4>This is sample component</h4>
        </div>
        <h1 className="App">{props.children}</h1>
        </>
    )
}
export default Sample;