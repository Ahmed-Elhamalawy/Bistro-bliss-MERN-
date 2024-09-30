const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

const createBooking = async (req, res) => {
  const { user, email, date, time, guests } = req.body;
  const booking = new Booking({
    user,
    email,
    date,
    time,
    guests,
  });

  try {
    await booking.save();
    await User.findByIdAndUpdate(user, { $push: { bookings: booking } });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBookingsByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ user: id }).populate("user");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};
const acceptBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: "accepted" } },
      { new: true, runValidators: true } // Run validation on the updated document
    );
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

const declineBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: "rejected" } },
      { new: true, runValidators: true } // Run validation on the updated document
    );
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createBooking,
  acceptBooking,
  getAllBookings,
  declineBooking,
  getBookingsByUserId,
};
