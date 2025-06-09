const express=require("express");
const router=express.Router();

const { TreatmentController, getTreatment, deleteTreatment } = require("../Controller/Treatment");
router.post("/treatment", TreatmentController);
router.get("/getTreatment",getTreatment);
router.post("/deleteTreatment/:id",deleteTreatment);

module.exports= router;                                                                                 