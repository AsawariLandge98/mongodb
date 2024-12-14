const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Models/chat.js");

// Middleware and View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Create Chat Document
let chat1 = new Chat({
  from: "neha",
  to: "priya",
  msg: "send me your exam sheets", // Corrected field name
  created_at: new Date(),
});

chat1.save()
  .then((res) => {
    console.log("Chat saved:", res);
  })
  .catch((err) => {
    console.log("Error saving chat:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Root is working");
});

// Start Server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
