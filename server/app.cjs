require('dotenv').config();
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoute');
const path = require('path'); // <-- Import path

const app = express();
app.use(cors());
app.use(express.json());

// Payment API route
app.use('/api/payment', paymentRoutes);

// Serve static files from frontend
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
