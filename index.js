const express = require('express');
const cors = require('cors')
const app = express();
require('./db/config');
const Data = require('./db/DataModel');
const User = require('./db/UserModel');
app.use(cors());
app.use(express.json());

app.get('/data', async(req, res)=>{
let result = await Data.find();
    res.send(result)
    console.log(result)
})

app.post('/login',async (req, res)=>{
    if(req.body.password && req.body.email){
        let result =await User.findOne(req.body).select('-password');
    if(result){
        res.send(result)
    }else{
        res.send({message:'user not found'})
    }
    }else{
        res.send({message:'please enter valid credential'})
    }
    
       
    console.log(req.body)
})

app.listen('5000', ()=>{
    console.log('app is running on port 5000')
})