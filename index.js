import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.end('<h1>Hello</h1>')
})
app.listen(PORT,()=>{
    console.log('Server has been started');
})
