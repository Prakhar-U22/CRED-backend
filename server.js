const express = require("express");

const app = express();
const port = 5000;

// Importing MongoDB connection function
const mongoDB = require('./db');

// Connect to MongoDB
mongoDB();


// Middleware to parse JSON bodies
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  // Set allowed origin for CORS
  res.setHeader("Access-Control-Allow-Origin", "https://cred-app-p-u.vercel.app/");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
  next();
});

// const cors = require("cors");
// app.use(cors());


//Router
app.use(require("./Router/UserRouter"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
