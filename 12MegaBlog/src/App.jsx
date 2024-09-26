
import './App.css'

function App() {
  //IF YOU CREATE USING CREATE REACT
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  
  //IF YOU CREATE USING VITE
  console.log(import.meta.env.VITE_APPWRITE_URL);


  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
