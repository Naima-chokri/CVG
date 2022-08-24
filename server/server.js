const express = require("express");
require("dotenv").config();
const connectDB = require("./coneectDB/coneectDB");

const app = express();
app.use(express.json());

connectDB();

app.use("/user", require("./routes/userRoutes"));
app.use("/profile", require("./routes/profileRoutes"));
app.use("/publishRide", require("./routes/publishRideRoutes"));
app.use("/booking", require("./routes/bookingRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Example app listening on port ${port}!`)
);