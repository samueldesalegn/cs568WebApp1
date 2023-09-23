import logo from './logo.svg';
import './App.css';
import React from "react";

function Box({box}){
  return (
    <div
      style={{width: "40px", height: "40px", padding:"10px", margin:"5px", border: "5px solid black"}}
    >{box}</div>
  )
}

class BoxList extends React.Component {
  state = {row: true};
  action = () =>{
    this.setState({row: !this.state.row});
  }
  render(){
    let direction = this.state.row? "row":"column"
    return (
      <div >
        <div style={{display: "flex", flexDirection: direction, border: "2px", justifyContent:"center", alignItems: "center"}}>
          {
            [1, 2, 3].map((box, index) => <Box key={index} box={box} />)
          }
        </div>
          <button onClick={this.action}>{this.state.row? "Verticalize": "Horizontalize"}</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
}

export default App;
