// express server
import { Configuration, OpenAIApi } from "openai";
import  express from 'express';
import bodyPaser from'body-parser';
import cors from 'cors';
const app = express('');
const port=3500;

const configuration = new Configuration({
    organization: "org-6iM2BuXCXikW1awzyTDKaS8E",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyPaser.json());
app.use(cors());

app.post('/',async(req,res)=>{
    const {messageData}=req.body
    console.log(messageData)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are SU. You are a personal assistant, here to help others.
        ${messageData}`,
        max_tokens: 1000,
        temperature: 0,
    });
    console.log(response.data)
    if(response.data){
        if(response.data.choices){
            res.json({
                message: response.data.choices[0].text
            })
        }
    }

});

app.listen(port,()=>{
    console.log('example app is listening')
});