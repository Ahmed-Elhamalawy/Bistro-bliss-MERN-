const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/createBooking", bookingController.createBoonking);
router.get("/getAllBookings", bookingController.getAllBookings);
router.put("/editBooking/:id", bookingController.editBooking);

module.exports = router;
