import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input";
import MainScreen from './ChatBot/MainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainScreen />
    </>
  )
}

export default App
