import logo from './logo.svg';
import './App.css';
import React from "react";

// class Counter extends React.Component {

//   render() {
//     return(
//       <div>
//         <button onClick={this.props.cb}>Increase</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = { count: 1 };
//   action = ()=>{
//     this.setState({ count: this.state.count + 1})

//     }

//   render() {
//   return (
//     <div class="App">

//       <p>{this.state.count}</p>
//       <Counter cb={this.action} />


//     </div>

//   );
//   }
//   }

// class Counter extends React.Component {


//   render() {
//     return(
//       <div>
//         <p>{this.props.count}</p>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = { count: 1 };
//   action = ()=>{
//     this.setState({ count: this.state.count + 1})

//     }

//   render() {
//   return (
//     <div class="App">
//       <Counter count={this.state.count} />
//       <button onClick={this.action}>Increase</button>


//     </div>

//   );
//   }
//   }


class DisplayMsg extends React.Component {
  render() {
    const { text, type } = this.props; // JS, where 'props' instance variable come from?
    return ( // JSX
      <div style={{ color: type === "success" ? 'green' : 'red' }}> {text} </div>
    );
  }
}



class App extends React.Component {
  //  render() {
  //  return (
  //    <div class="App">
  //      <DisplayMsg text="Okay" type="success" />


  //    </div>

  //  );
  //  }

  // constructor(props) {
  //   super(props);
  //   this.state = { name: 'React'}; // similar to defining state outside constructor
  //   }
  //   whoIsThis =() => {
  //   console.log(this.state.name);
  //   }
  //   render() {
  //   return (
  //   <button onClick={this.whoIsThis}>Hello {this.state.name}</button>
  //   )
  //   }

  state = { value: 0 };
  action = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    console.log(this.state.value);
  }
  render() {
    return (
      <><p>{this.state.value}</p>
        <button onClick={this.action}>Click</button></>
    );
  }


}

export default App;
