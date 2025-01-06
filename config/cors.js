const cors = require('cors');

const nodeEnv = process.env.NODE_ENV;

// Define allowed origins
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if there is no origin or if allowedOrigins is empty or if the origin is in the allowedOrigins
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);  // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS'));  // Reject the origin
    }
  }
};

// Export CORS configuration
module.exports = cors(
  nodeEnv === 'production' ?
    corsOptions :
    {}
);