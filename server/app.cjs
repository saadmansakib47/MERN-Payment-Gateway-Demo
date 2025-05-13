require('dotenv').config(); 
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));