const express=require("express");
const router=express.Router();

const { TreatmentController, getTreatment } = require("../Controller/Treatment");
router.post("/treatment", TreatmentController);
router.get("/getTreatment",getTreatment);

module.exports= router;                                                                                 