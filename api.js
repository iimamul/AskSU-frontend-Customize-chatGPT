// express server

import  express from 'express';
import bodyPaser from'body-parser';
import cors from 'cors';
const app = express('');
const port=3000;

app.use(bodyPaser.json());
app.use(cors());

app.post('/',(req,res)=>{
    res.send({
        message:"hello world"
    });
});

app.listen(port,()=>{
    console.log('example app is listening')
});