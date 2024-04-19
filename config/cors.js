const cors = require('cors');
const environment = require('../constants/environment');

// Define allowed origins
const allowedOrigins = [
  environment.SERVER_URL,
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

module.exports = cors();
