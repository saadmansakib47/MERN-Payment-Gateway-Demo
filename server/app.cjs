require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const path = require('path'); // To resolve paths
const paymentRoutes = require('./routes/paymentRoute');

const app = express();
app.use(cors());
app.use(express.json());

// Payment API route
app.use('/api/payment', paymentRoutes);

// Serve static files from React's build folder (located in 'client/build')
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route to serve index.html for any unknown paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
