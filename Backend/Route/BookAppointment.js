const express=require("express");
const router=express.Router();

const { BookAppointmentCreate } = require("../Controller/BookAppointment");

router.post("/bookAppointment",BookAppointmentCreate);

module.exports=router;