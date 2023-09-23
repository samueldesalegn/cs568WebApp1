// // import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");
//   const [gender, setGender] = useState("");
//   // const change = e => {
//   //   console.log(e.target);
//   //   setMessage(e.target.value);
//   // }; 
//   // const change = e => {
//   //   const options = Array.from(e.target.selectedOptions, option =>option.value)
//   //   console.log(options);
//   //   setMessage(e.target.value);
//   // };
//   // const change = e => {
//   //   console.log(e.target);
//   //   setMessage(e.target.value);
//   // };
//   const changeFile = e => {
//     console.log(e.target);
//     // setMessage(e.target.value);
//   };
//   return (
//     <div className="App">
//      {/* <input type="text" value={message} placeholder="Name" onChange={change} /> */}
//      {/* <textarea type="text" value={message} placeholder="Name" onChange={change} /> */}
//      {/* <select onChange={change} multiple>
//       <option value="car">Car</option>
//       <option value="Bike">Bike</option>
//       <option value="MotorCycle">MotorCycle</option>
//      </select> */}
//       {/* <label>Male</label>
//       <input type="radio" checked value="Male" Name="Gender" onChange={change} />
//       <label>Female</label>
//       <input type="radio" value="Female" Name="Gender" onChange={change} /> */}


// {/* <label>Car</label>
//       <input type="checkbox" checked value="car" Name="Car" onChange={change} />
//       <label>Bike</label>
//       <input type="checkbox" value="bike" Name="Bike" onChange={change} /> */}

//       <input type="file" onChange={changeFile} multiple/>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    car: false,
    bike: false,
    name: "",
    id: ""
  });
  const changeText = e => {
    console.log(e.target.value);
    if(e.target.value.includes("a")){
      return;
    }
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const keyUp = e => {
    //console.log(e.key, e.keyCode);
    if (e.keyCode === 13) {
      //ENTER
      //
    }
  };
  const handleSubmit = (e) => {
    //send data to server
    e.preventDefault();
    
    console.log('here')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.id}
          onChange={changeText}
          name="id"
          onKeyDown={() => console.log("keydown")}
          onKeyUp={keyUp}
        />
        <input type="submit" value="Update"></input>
        <input type="reset"></input>
      </form>
    </div>
  );
}

export default App;

