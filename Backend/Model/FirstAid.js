const mongoose=require("mongoose");

const firstAid = mongoose.Schema({
    disease:{
        type:String,
        required:true,
    },
    medicine:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("FirstAid",firstAid);