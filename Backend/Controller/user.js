const User=require("../Model/Signup");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");

exports.signup= async(req,res)=>{
    try {
        const { firstName, lastName, email, password, isDoctor } = req.body;
        //check if user already exist or not 
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                error:error.message,
                message:"User Already Exist"
            })
        }
        // encrypt password
        let hashPassword;
        try{
            hashPassword=await bcrypt.hash(password,10);
        }catch(error){
            return res.status(500).json({
                success:false,
            })
        }
        //create user entry
        const user=await User.create({
            firstName,lastName,email,password:hashPassword
        })
        return res.status(200).json({
            success:true,
            message:"User Create Successfully!"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User not create try again"
        })
    }
}

//for login

exports.login=async(req,res)=>{
  try {
      //fetch email and password
      const {email,password}=req.body;
      //validation on email and password
      if(!email || !password){
          return res.status(400).json({
              success:false,
              message:"Enter the valid email and password",
          })
      }
      //check user avalilable or not 
      const user=await User.findOne({email});
      if(!user){
          return res.status(401).json({
              success:false,
              message:"User is not Registered"
          })
      }
      //create a payload
      const payload={
          email:user.email,
          id:user.id,
      }
      // verify password & generated  a JWT Token
      if(await bcrypt.compare(password,user.password)){
    
          let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"12h"});
          const option={
              expires:new Date(Date.now()+3*24*60*60*1000),
              httpOnly:true,
          }
         return res.cookie(token,option).status(200).json({
              success:true,
              token,
              user,
              message:"user Login Successfully"
          })
      }else{
          return res.status(403).json({
              success:false,
              message:"Password Incorrent"
          })
      }
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Login failer"
    })
  }
    
}