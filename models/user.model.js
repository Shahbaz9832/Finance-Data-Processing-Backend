const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true, "Please enter a password"],
        trim:true,
         minlength:[8, "Password must be at least 8 characters long"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
// export const user= mongoose.model("User",userSchema);
module.exports = mongoose.model("User", userSchema);