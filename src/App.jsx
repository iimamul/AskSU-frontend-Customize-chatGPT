import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChatUI from './chatUI/ChatUI'

function App() {
  // const [message, setMessage] = useState({})
  const [response, setResponse] = useState('')

 
  const sendMessage=(messageData)=>{
    // console.log(messageData)
    // setMessage({text: message, isUser:true})
    // messages.push({text: message, isUser:true})
    fetch('http://localhost:3000/',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({messageData})
    })
    .then((res)=>res.json())
    .then((data)=>{
      setResponse(data.message)
      console.log(response)
    })
  }
  return (
    <div className="App">
      <h2> Ask SU </h2>
      <ChatUI response={response} sendMessage={sendMessage}></ChatUI>
    </div>
  )
}

export default App
