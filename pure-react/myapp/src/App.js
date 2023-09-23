import logo from './logo.svg';
import './App.css';
import React from "react";


function Box({label}) {
  return (
<p style={{width:"40px", height:"40px", border:"2px solid red"}}

>{label}</p>
  );
}

class BoxList extends React.Component {
  state = {row: true};
  clickedButton = () => this.setState({row: !this.state.row});
  render(){
    const direction = this.state.row? "row":"column"
    return (
      <div>
        <div
           const style = {{
            display: "flex",
            flexDirection: direction,
            justifyContent: "center",
            alignItems: "center",
            border: "5px solid black",
            padding: "20px",
            marginTop: "2px"
           }}
        >
        {[1, 2, 3].map(value => <Box key={value} label={value}/>)}

        </div>
        <button onClick={setInterval(this.clickedButton, 1000)}>{this.state.row? "Verticalize": "Horizontalize"}</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BoxList />
      </div>
    );
  }
}

export default App;
