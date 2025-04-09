import './ChatBot.css'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
const InputArea = ({ SetMessage }) => { // Fix props destructuring
  const [currentMessage, setCurrentMessage] = useState("") // Change to string instead of array

  const HandleSendMessage = () => {
    if(currentMessage.trim() !== "") {
      SetMessage(prevMessage => [...prevMessage, {content: currentMessage, sender: "user"}])
      setCurrentMessage("")
    }
  }

  const handleKeyDown = (e) => {
    // Check if the Enter key is pressed (keyCode 13 or 'Enter')
    if (e.key === "Enter") {
      HandleSendMessage();
    }
  };

  return (
    <div   className="chatbot-component input-area">
      <h1>Input Area</h1>
      <input className="chatbot-component input-area" type="text" placeholder="Type your message hereeeee..." value={currentMessage} onChange={e => setCurrentMessage(e.target.value)} onKeyDown={handleKeyDown} />
      <Button  onClick={()=>HandleSendMessage()} > send </Button>
    </div>
  )
}

export default InputArea