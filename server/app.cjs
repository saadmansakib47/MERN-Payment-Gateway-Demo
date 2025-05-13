// Required dependencies
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoute'); // Make sure this file exists and contains your routes

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/payment', paymentRoutes);

// Serve static files from the React app (the build folder in server/public)
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all handler for serving the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
