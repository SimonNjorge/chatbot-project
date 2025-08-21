import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages  from './components/ChatMessages';

import './App.css';
import { Chatbot } from 'supersimpledev';

function Welcome ({chatMessages}){
    if(chatMessages.length == 0){
        return  <div className='welcome-msg'>
            <span>Welcome to chatbot, </span>
            This chatbot does only a limited things
            which include; rolling a dice, flipping 
            a coin, getting todays date. The chatbot 
            also knows the capital city of Kenya and the
            person who programmed it.
        </div>
    }
}

function App () {
  //const array = React.useState("chatmessages object")
  useEffect(() => {
    Chatbot.addResponses({
        'what is your name': "my name is chatbot simple guy",
        'capital city of kenya': "Nairobi (kanairo)",
        'who programmed you': 'i was programmed by simon'

    }, []);
  });

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) 
  );
        /*[{
          message: "hello chatbot",
          sender: "user",
          id: "id1"
      },{
          message: "Hello! how can i help you", 
          sender: "robot",
          id: "id2"
      },{
          message: "Can you get me todays date?",
          sender: "user",
          id: "id3"
      },{
          message: "today is july 13",
          sender: "robot",
          id: "id4"
      }]*/
  

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])
  //const [chatMessages, setChatMessages] = array
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  return (
      <div className="app-container">
        <Welcome chatMessages={chatMessages}/>
        <ChatMessages
            chatMessages={chatMessages} 
        />
        <ChatInput
            chatMessages={chatMessages} 
            setChatMessages={setChatMessages}
        />
      </div>
  )
}

export default App;
