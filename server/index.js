import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// import User from '/server/users'
const app=express();
app.use(cors());

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/heliverse')}   
   main()
   // it is like .then .catch for catch the error
   const  db=mongoose.connection;
   db.on("error",console.error.bind(console, "connection error"));
   db.once("open",()=>{
    console.log("database connected")
    
   });

   let userSchema=new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    first_name:'string',
    last_name:"String",
    email:"String",
    gender:"String",
    avatar:"String",
    domain:"String",
    available:"String"
})
const User = mongoose.model('User', userSchema);
// const card = JSON.stringify(Users);
   const users = await User.find({}).exec();
    // console.log(users);
 
  app.get('/',(req,res)=>{
    res.send(users)
  })

app.listen('3000',()=>{
    console.log('app is listening on port 3000');
})