import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    console.log("Add value " + counter);
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    console.log("Remove value " + counter);
  }

  return (
    <>
      <h1>Chai aur Angular</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App
