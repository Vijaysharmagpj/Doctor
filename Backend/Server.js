const express=require("express");

const app=express();

const cors = require("cors");
app.use(cors());

require('dotenv').config();

const PORT= process.env.PORT ||4000;

app.use(express.json());

require("./config/database").connect();

// import and mount route
const user=require("./Route/User");
const treatment = require("./Route/Treatment")
const bookAppointment=require("./Route/BookAppointment")
const contactUs=require("./Route/Contactus");
const firstAid=require("./Route/firstAid");
app.use("/api/doctor",user);
app.use("/api/doctor",treatment);
app.use("/api/doctor",bookAppointment);
app.use("/api/doctor",contactUs);
app.use("/api/doctor",firstAid);

//activate 

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})