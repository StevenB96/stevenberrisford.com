const cors = require('cors');

// Define allowed origins
const allowedOrigins = [
  'http://localhost:8008',
  'http://stevenberrisford.com',
];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = cors(corsOptions);
