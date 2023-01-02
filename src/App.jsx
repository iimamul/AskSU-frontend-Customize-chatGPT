import { useState } from 'react'
import './App.css'
import ChatUI from './chatUI/ChatUI'
import { Configuration, OpenAIApi } from "openai";
// import bodyPaser from 'body-parser';
// import cors from 'cors';

const configuration = new Configuration({
  organization: "org-6iM2BuXCXikW1awzyTDKaS8E",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// app.use(bodyPaser.json());
// app.use(cors());

function App() {
  // const [message, setMessage] = useState({})
  const [response, setResponse] = useState('')


  const sendMessage = async(messageData) => {
    // fetch('http://localhost:3500/',{
    //   method:'POST',
    //   headers: {
    //     'Content-Type':'application/json',
    //   },
    //   body: JSON.stringify({messageData})
    // })
    // .then((res)=>res.json())
    // .then((data)=>{
    //   setResponse(data.message)
    //   console.log(response)
    // })
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Pretend you are SU. You are a personal assistant, here to help others.
      ${messageData}`,
      max_tokens: 1000,
      temperature: 0,
    });
    // console.log(response.data)
    if (response.data) {
      if (response.data.choices) {
        // res.json({
        //   message: response.data.choices[0].text
        // })
        setResponse(response.data.choices[0].text)
        console.log(response.data.choices[0].text)
      }
    }
  }



  return (
    <div className="App">
      <ChatUI response={response} sendMessage={sendMessage}></ChatUI>
    </div>
  )
}

export default App
