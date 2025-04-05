import './ChatBot.css'

const ChatArea=()=>{
    return(
        <div className="chat-area">
            <ChatLog/>
            <InputArea className="chatbot-component input-area"/>
        </div>
    )
}

export default ChatArea;