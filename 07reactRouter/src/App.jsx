import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      {/* <h1 className='bg-green-600 text-white text-center p-4'>react router</h1> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
