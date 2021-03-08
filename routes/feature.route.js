const express = require("express");
const router = express.Router();

const featureController = require("../controllers/feature.controller");
const validate = require("../validates/feature.validate");

router.get("/", featureController.index);
router.post("/encrypt", validate.checkInput, featureController.encrypt);

module.exports = router;
