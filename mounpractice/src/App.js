import logo from './logo.svg';
import './App.css';
import React from "react";


class MyComponent extends React.Component {
  state = {message: "initialize"}
  
  componentDidMount() {
    console.log("ComponentDidMount");
    this.setState({message: "new Message"});
  }
  componentDidUpdate(ops) {
    console.log("Here");
    if (ops.count !== this.props.count) {
      this.setState({ count: this.props.count})
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnMount");
  }
  render(){
    return (
      <div>
        <p>{this.state.message}</p>
        <p>Hello World!</p>
      </div>
    )
  }
}

class App extends React.Component{
  state = {show: true};
  showHide = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="App">
        {this.state.show? <MyComponent/>: null}
        <button onClick={this.showHide}>showHide</button>
      </div>
    );
  }
}

export default App;
