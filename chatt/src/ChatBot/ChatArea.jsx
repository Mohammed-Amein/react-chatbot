import './ChatBot.css'
import ChatLog from './ChatLog';
import InputArea from './InputArea';

const ChatArea=({history,SetMessage})=>{

    if(!Array.isArray(history)){
        return (
            <div>
                <h1>Invalid History</h1>
                {console.log("no history")}
            </div>
        )
        
    }
    return(
        <div >
            <ChatLog history={history}/>
            <InputArea SetMessage={SetMessage} />
            
        </div>
    )
}

export default ChatArea;