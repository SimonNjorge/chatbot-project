import { Chatbot} from 'supersimpledev';
import { useState } from 'react';

import './ChatInput.css';

export function ChatInput ({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  function saveInputText (event) {
      setInputText(event.target.value)
  }

  async function sendMessage () {
      const newChatMessages = [...chatMessages, {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID()
      }];
      setChatMessages([...newChatMessages, {
        message: 'loading...',
        sender: 'robot',
        id: crypto.randomUUID()
      }]);

      setInputText('');

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([...newChatMessages, {
          message: response,
          sender: "robot",
          id: crypto.randomUUID()
      }]);

      //setInputText('');
  }

  return (
      <div className="header-sec">
          <input 
              placeholder="Send a message to chatbot"
              size="24"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
              onKeyDown={(event)=>{
                  if(event.key === "Enter") sendMessage();
                  else if(event.key === "Escape") setInputText('')
              }}
          />
          <button
              onClick={sendMessage}
              className="send-msg-btn"
          >Send</button>
      </div>
  )
}