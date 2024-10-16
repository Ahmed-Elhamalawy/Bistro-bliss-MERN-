const Booking = require("../models/bookingModel");
const User = require("../models/userModel");
//twilio
const twilio = require("twilio");
const accountSid = "AC0835c7db526f5705e6f33a9924434c8d";
const authToken = "1796c9edc1634520b4cc7d6ce9f4a58f";
const client = require("twilio")(accountSid, authToken);

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

const declineBooking = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the booking and update its status
    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: "rejected" } },
      { new: true, runValidators: true }
    );

    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Fetch the user after getting the booking
    const user = await User.findById(booking.user);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send a WhatsApp message to the user's phone number
    const phoneNumber = user.phone; // Assuming user's phone number is stored in the 'phone' field
    const message = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio sandbox WhatsApp number or your live Twilio number
      to: `whatsapp:${phoneNumber}`,
      body: `Hello ${user.name}, your booking with ID: ${id} has been rejected.`,
    });

    console.log("WhatsApp message sent:", message.sid);

    // Return the updated booking
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const acceptBooking = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the booking and update its status
    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: "accepted" } },
      { new: true, runValidators: true } // Run validation on the updated document
    );

    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Fetch the user after getting the booking
    const user = await User.findById(booking.user);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send a WhatsApp message to the user's phone number
    const phoneNumber = user.phone; // Assuming user's phone number is stored in the 'phone' field
    const message = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio sandbox WhatsApp number or your live Twilio number
      to: `whatsapp:${phoneNumber}`,
      body: `Hello ${user.name}, your booking with ID: ${id} has been accepted.`,
    });

    console.log("WhatsApp message sent:", message.sid);
    // Return the updated booking
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBooking,
  acceptBooking,
  getAllBookings,
  declineBooking,
  getBookingsByUserId,
};
