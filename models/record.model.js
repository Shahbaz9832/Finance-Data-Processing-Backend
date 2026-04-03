const mongoose=require('mongoose');
const recordSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:string,
        enum:["income","expense"],
        required:true   
    },
     category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    note: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  
},{timestamps:true})