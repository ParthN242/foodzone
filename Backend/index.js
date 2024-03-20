const express = require("express");
const authRouter = require("./Routes/auth.router");
const userRouter = require("./Routes/user.router");
const foodRouter = require("./Routes/food.router");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./Middleware/error");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Database Connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Something wrong in database connection");
    console.log(error);
  });

// All Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);

app.use("*", (req, res) => {
  res.json("Bad request");
});

// Error Handling
app.use(errorMiddleware);

// App Listen
app.listen(4000, () => {
  console.log("Server Ported on 4000");
});
