const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');
const rateLimiter = require('../middleware/rateLimiter');

// POST /api/contact - Submit contact form
router.post('/', rateLimiter, validateContact, submitContact);

// GET /api/contact - Get all contacts (for admin dashboard)
router.get('/', getAllContacts);

module.exports = router;