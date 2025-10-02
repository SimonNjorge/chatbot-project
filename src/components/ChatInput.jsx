import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';

import './ChatInput.css';

export function ChatInput ({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  function saveInputText (event) {
      setInputText(event.target.value)
  }

  async function sendMessage () {

    const today = dayjs();
    const time = today.format('ddd  D HH:mm A');

    const newChatMessages = [...chatMessages, {
        message: inputText,
        sender: "user",
        time: time,
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
        time: time,
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
          <button onClick={() => setChatMessages([])} className='clear-btn'>
            clear
          </button>
      </div>
  )
}