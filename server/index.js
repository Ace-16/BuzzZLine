const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const uri = process.env.MONGO_URI
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","PUSH","PUT","DELETE"],
    credentials: true,
  })
)

app.use(express.json());

app.use(cookieParser());

app.use("/",authRoute)

mongoose
  .connect(uri)
  .then( () => console.log("Mongoose connected successfully"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}`)
})