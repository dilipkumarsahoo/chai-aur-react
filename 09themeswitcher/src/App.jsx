import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change theme
  useEffect(() => {
    const myhtml = document.querySelector('html')
    myhtml.classList.remove("light","dark")
    myhtml.classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
        </ThemeProvider>
    </>
  )
}

export default App
