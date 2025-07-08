const express=require("express");
const router=express.Router();

const { FirstAid, getFirstAid, updateFirstAid } = require("../Controller/FirstAid");

router.post("/firstAid",FirstAid);
router.get("/getfirstAid",getFirstAid);
router.put("/updatefirstAid/:id",updateFirstAid);

module.exports=router