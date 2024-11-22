//imports and initializations
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();
const userRouter = require("./routes/userRouter");
const menuItemRouter = require("./routes/menuItemRouter");
const bookingRouter = require("./routes/bookingRouter");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to database
connectDB();

//routes
app.use("", userRouter);
app.use("", menuItemRouter);
app.use("", bookingRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
