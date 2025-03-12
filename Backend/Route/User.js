const express = require("express");

const router = express.Router();
const { signup, login } = require("../Controller/user");
const { TreatmentController } = require("../Controller/Treatment");
router.post("/signup", signup);
router.post("/login", login);
router.post("/treatment", TreatmentController);

module.exports = router;
