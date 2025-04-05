import SideBar from "./SideBar"
import InputArea from "./InputArea"
import ChatLog from "./ChatLog"
import { useState } from "react"
import './ChatBot.css'

const MainScreen = () => {
  const [Message,SetMessage] = useState([])
  return (
    <div className="main-screen">
      
      <SideBar />
      <InputArea />
      <ChatLog />
    </div>
  )
}

export default MainScreen