const mongoose=require("mongoose");

const BookAppointment = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    doctor:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    Disease:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("BookAppointment",BookAppointment);