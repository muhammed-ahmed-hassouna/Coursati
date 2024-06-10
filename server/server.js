const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: `http://localhost:3000`,  
  credentials: true,  
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const authRoutes = require("./routes/authRoutes")
const courseRoutes = require("./routes/courseRoutes")

app.use(authRoutes);
app.use(courseRoutes);

const PORT = process.env.PORT || 3999;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
