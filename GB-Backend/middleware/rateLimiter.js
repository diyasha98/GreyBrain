const rateLimit = require('express-rate-limit');

// Limit each IP to 5 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Skip rate limiting for certain IPs (optional)
  skip: (req) => {
    // Add your own IP or trusted IPs here if needed
    const trustedIPs = [];
    return trustedIPs.includes(req.ip);
  }
});

module.exports = limiter;