const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes/mainRoutes.js');

// Configuring dotenv
dotenv.config();
const app = express();
const port = 3000;

app.use(cookieParser());//cookie okumak için gerekli!
app.use(express.json());  // JSON verisini okumak için gerekli!
app.use(express.urlencoded({ extended: true })); // Form verisi için gerekli!
app.use("/",mainRoutes);// routes all Main routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})