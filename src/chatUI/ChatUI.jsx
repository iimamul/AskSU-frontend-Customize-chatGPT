import React,{useState} from 'react';
import './ChatUI.css'




const ChatUI = ({ response, sendMessage }) => {
    const [sendMsg, setSendMsg] = useState('')
    const messages = [
        { text: 'Hey! I am SU. How can I help you today?', isUser: false },
        // { text: 'I need to convert 12 inches to centimeters.', isUser: true },
        // { text: '12 inches is equal to 30.48 centimeters.', isUser: false }
      ];

    sendMsg && messages.push({text: sendMsg, isUser:true})
    response && messages.push({text: response, isUser:false})
    console.log(messages)
  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'right' : 'left'}`}>
            <p>{message.isUser? message.text+' ~ ME' : 'SU ~ '+message.text}</p>
          </div>
        ))}
      </div>
      <form className="chat-form">
        <textarea type="text" placeholder="Don't be shy, ask away." onChange={e=>setSendMsg(e.target.value)}/>
        <button type="button"  onClick={e=>sendMessage(sendMsg)} >Send</button>
      </form>
    </div>
  );
}

export default ChatUI;
