import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages ({chatMessages}) {
    //this value starts as null because the element
    //that we want to assign is not yet created
    const chatMessagesRef = useRef(null);
    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },[chatMessages])
    return (
        <div className="chat-messages-container"
            ref={chatMessagesRef}
        >
            {chatMessages.map(chatMessage => {
                return (
                <ChatMessage
                    message = {chatMessage.message}
                    sender = {chatMessage.sender}
                    time={chatMessage.time}
                    key={chatMessage.id}
                />
                )
            })}
        </div>
    )
}

export default ChatMessages;