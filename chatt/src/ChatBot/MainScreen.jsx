import SideBar from "./SideBar"

import { useState } from "react"
import { useEffect } from "react"
import ChatArea from "./ChatArea"
import { sendMessageToAPI } from './api';
import './ChatBot.css'

const MainScreen = () => {
  const [Message,SetMessage] = useState([{content:"hello",sender:" "}])

  useEffect(() => {
    // Only send a request to the API if the last message is from the user
    if (Message[Message.length - 1].sender === 'user') {
        // Call the function to send the message to the API
        const userMessage = Message[Message.length - 1].content;

        sendMessageToAPI(userMessage).then((botResponse) => {
            // After receiving the bot's response, update the state with the new message
            SetMessage((prevMessages) => [
                ...prevMessages,
                { content: botResponse, sender: 'bot' },
            ]);
        });
    }
}, [Message]); // This runs whenever the 'message' array changes
  return (
    <div className="main-screen">
      
      <SideBar />
      <ChatArea history={Message} SetMessage={SetMessage}/>
    </div>
  )
}

export default MainScreen