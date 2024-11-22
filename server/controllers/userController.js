const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin, phone, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new User({
      email,
      password: hashedPassword,
      isAdmin,
      username,
      phone,
      address,
    });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json({ user, token });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyValue.username) {
        res.status(400).json({ message: "Username already exists" });
      } else if (error.keyValue.phone) {
        res.status(400).json({ message: "Phone number already exists" });
      } else if (error.keyValue.email) {
        res.status(400).json({ message: "Email already exists" });
      } else {
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
      }
    } else {
      console.error(error);
      res.status(500).json({ message: "Error creating user" });
    }
  }
};

const signUpAdmin = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin, phone, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new User({
      email,
      password: hashedPassword,
      isAdmin: "admin",
      username,
      phone,
      address,
    });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json({ user, token });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
    } else {
      console.error(error);
      res.status(500).json({ message: "Error creating user" });
    }
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate({
      path: "bookings",
      select: "status",
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

const getAllUsers = async (req, res) => {
  const user = await User.find({}).populate("bookings");
  res.json(user);
};
module.exports = { signUp, login, updateUser, getAllUsers, signUpAdmin };
