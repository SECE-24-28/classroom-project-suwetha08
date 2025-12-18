const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");

connectDB();





app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

