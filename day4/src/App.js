import logo from './logo.svg';
import './App.css';
import React from "react";

class Counter extends React.Component {
  state = {count: 1};
  componentDidMount() {
    console.log("ComponentDidMount");
    this.setState({count: 2});
  }
  componentDidUpdate(preProps) {
    console.log("Here");
    if (preProps.count !== this.props.count) {
      this.setState({ count: this.props.count})
    }
  }
  render() {
    return <p>{this.state.count}</p>
  }
}
class App extends React.Component{
    state = {count: 1};
  
  increase = () => {
    this.setState({ count: this.state.count + 1})
  };
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count}/>
        <button onClick={this.increase}>Increase</button>
      </div>
    );

  }
}

export default App;
