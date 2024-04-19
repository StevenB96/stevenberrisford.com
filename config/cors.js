const cors = require('cors');

// Define allowed origins
const allowedOrigins = [
  process.env.SERVER_URL || "http://localhost:3000",
];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // Allow font requests from any origin
  exposedHeaders: ['Access-Control-Allow-Origin'],
};

module.exports = cors(corsOptions);
