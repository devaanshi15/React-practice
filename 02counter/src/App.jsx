/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import {useState} from 'react'
import './App.css'

function App() {

  let [c, setC] =useState(15)

  const addValue = () => {
    if (c < 20) {
      setC(c + 1);
    }
  }

  const removeValue =()=>{
    if (c > 0) {
      setC(c - 1);
    }
  }

  return (
    <>
      <h1>React processing</h1>
      <h2>Counter value : {c}</h2>

      <button onClick={addValue}>Add value {c}</button><br />
      <button onClick={removeValue}>remove value {c}</button>

      <p>footer:{c} </p>
    </>
  )
}

export default App
