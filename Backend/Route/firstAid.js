const express=require("express");
const router=express.Router();

const { FirstAid, getFirstAid } = require("../Controller/FirstAid");

router.post("/firstAid",FirstAid);
router.get("/getfirstAid",getFirstAid);

module.exports=router