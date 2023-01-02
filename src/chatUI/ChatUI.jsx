import React, { useState, useEffect , useRef} from "react";
import "./ChatUI.css";

const ChatUI = ({ response, sendMessage }) => {
  const [sendMsg, setSendMsg] = useState("");
  const [messages, setMessages] = useState([
    // { text: "Hey! I am SU. How can I help you today?", isUser: false },
    // { text: 'I need to convert 12 inches to centimeters.', isUser: true },
    // { text: '12 inches is equal to 30.48 centimeters.', isUser: false }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: sendMsg, isUser: true }]);
    sendMessage(sendMsg);
    setSendMsg('');
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth"});
  };

  useEffect(() => {
    if (response != "")
      setMessages([...messages, { text: response, isUser: false }]);
      scrollToBottom();
  }, [response]);

  
  return (
    <div className="chat-container">
      <h2> Ask SU </h2>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "right" : "left"}`}
          >
            <span>
              {message.isUser ? message.text + " ~ User" :  message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Don't be shy, ask away."
          onChange={(e) => setSendMsg(e.target.value)}
          value={sendMsg}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatUI;
