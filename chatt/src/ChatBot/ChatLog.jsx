import './ChatBot.css'
import MessagePlaceholder from './MessagePlaceholder'

const ChatLog = ({history}) => {
  return (
    <div className="relative ml-[300px] w-[calc(100%-400px)] h-[80vh] m-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
      {history.map((chat,index)=>(
        <MessagePlaceholder key={index} message={chat.content} sender={chat.sender} />
      ))}
    </div>
  )
}

export default ChatLog