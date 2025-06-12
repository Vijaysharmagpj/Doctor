const express=require("express");
const router=express.Router();

const { BookAppointmentCreate, getBookAppointment } = require("../Controller/BookAppointment");

router.post("/bookAppointment",BookAppointmentCreate);
router.get("/getBookAppointment",getBookAppointment);

module.exports=router;