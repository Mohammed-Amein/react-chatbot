import './ChatBot.css'

const ChatLog = ({history}) => {

  if (!Array.isArray(history)){
    return <h1 className="welcome"> lets chat </h1>;
  }
  return (
    <div className={`chatbot-component chat-log`}>
      <h1>Chat Log</h1>
    </div>
  )
}

export default ChatLog