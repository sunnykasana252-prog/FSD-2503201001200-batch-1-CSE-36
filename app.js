const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('HELLO from Express');
});
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
});