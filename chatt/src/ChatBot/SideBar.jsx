import { useState } from 'react'
import './ChatBot.css'
import { Button } from "@/components/ui/button"

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`chatbot-component sidebar ${!isOpen ? 'sidebar-closed' : ''}`}>
      <Button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '←' : '→'}
      </Button>
      <h1>Side Bar</h1>
    </div>
  )
}

export default SideBar