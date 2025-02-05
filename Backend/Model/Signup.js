const mongoose=require("mongoose");

const signupSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    isDoctor:{
        type:Boolean,
    },
})
module.exports=mongoose.model("signup",signupSchema);