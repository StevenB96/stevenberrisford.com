const cors = require('cors');

const nodeEnv = process.env.NODE_ENV;

// Define allowed origins
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

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

module.exports = cors(
  nodeEnv === 'production' ?
    corsOptions :
    {}
);
