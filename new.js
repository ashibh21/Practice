const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://ashibh21:ash2121@cluster0.pxjwtch.mongodb.net/userappnew"
);
app.use(express.json());

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});
app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const exists = await User.findOne({ username: username });
  console.log(exists);
  if (exists) {
    return res.status(400).send("user already exists");
  }
  const u = new User({
    name: name,
    username: username,
    password: password,
  });
  u.save();
  res.json({
    msg: "success",
  });
});

app.listen(3000);
