import mongoose from "mongoose";

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
module.exports=mongoose.model('users',userSchema);