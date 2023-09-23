import { useContext, useEffect, useState } from "react"
import GlobalContext from "./context";

export default function Counter(){
  const {state, setState} = useContext(GlobalContext);

  const increase = () => {
    setState({...state, count: state.count+1});
  }
  return(
    <div>
      <p>Chicago: {state.count}</p>
      <button onClick={increase}>IncreaseChicago</button>
    </div>
  )
}