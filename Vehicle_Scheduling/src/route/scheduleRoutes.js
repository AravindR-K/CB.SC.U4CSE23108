const express = require("express");
const router = express.Router();

const {
  getOptimalSchedule
} = require("../controller/scheduleController");

router.get("/schedule", getOptimalSchedule);

module.exports = router;