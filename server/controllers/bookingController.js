const Booking = require("../models/bookingModel");

const createBoonking = async (req, res) => {
  const booking = new Booking(req.body);
  try {
    await booking.save();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

const editBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createBoonking,
  editBooking,
  getAllBookings,
};
