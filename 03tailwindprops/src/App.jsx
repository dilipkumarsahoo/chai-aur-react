import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const myObj = {
  //   name: "dilip",
  //   lastName: "sahoo"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind</h1> 
      <Card username="Dilip" btnText='click me'/>
      <Card username="Deepak"/>
     

    </>
  )
}

export default App
