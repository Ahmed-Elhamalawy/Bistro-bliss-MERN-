const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/createBooking", bookingController.createBooking);
router.get("/getAllBookings", bookingController.getAllBookings);
router.put("/acceptBooking/:id", bookingController.acceptBooking);
router.put("/declineBooking/:id", bookingController.declineBooking);
router.get("/getBookingsByUser/:id", bookingController.getBookingsByUserId);

module.exports = router;
