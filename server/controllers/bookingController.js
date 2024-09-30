const Booking = require("../models/bookingModel");
const User = require("../models/userModel");
const client = require("./twilio");

//my controllers
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
    const user = await User.findById(booking.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const messageBody = `Your booking is Accepted`;
    const userPhoneNumber = user.phone; // User's phone number

    await client.messages.create({
      body: messageBody,
      from: "+18026130219", // Replace with your Twilio phone number
      to: userPhoneNumber, // User's phone number
    });

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};

// const declineBooking = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const booking = await Booking.findByIdAndUpdate(
//       id,
//       { $set: { status: "rejected" } },
//       { new: true, runValidators: true } // Run validation on the updated document
//     );
//     res.status(200).json(booking);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const declineBooking = async (req, res) => {
  const { id } = req.params;
  try {
    // Update the booking status to "rejected"
    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: "rejected" } },
      { new: true, runValidators: true }
    );

    // If the booking is not found, return a 404 response
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Find the user associated with the booking
    const user = await User.findById(booking.user);

    // If the user is not found, return a 404 response
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send SMS notification
    const messageBody = `Your booking is Rejected`;
    const userPhoneNumber = user.phone; // User's phone number

    await client.messages.create({
      body: messageBody,
      from: "+18026130219", // Replace with your Twilio phone number
      to: userPhoneNumber, // User's phone number
    });

    res.status(200).json(booking);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred while declining the booking." });
  }
};

module.exports = declineBooking;

module.exports = {
  createBooking,
  acceptBooking,
  getAllBookings,
  declineBooking,
  getBookingsByUserId,
};
