const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// DEBUG: Check if env variables are loaded
console.log('🔍 Email Config Check:');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Loaded' : '❌ Missing');
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✅ Loaded' : '❌ Missing');
console.log('EMAIL_FROM:', process.env.EMAIL_FROM);
console.log('EMAIL_TO:', process.env.EMAIL_TO);

// Configure email transporter - Simplified Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // This automatically sets host and port
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });

    // Send email notification to admin
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Submission ID: ${contact._id}<br>
            Time: ${new Date().toLocaleString()}<br>
            IP: ${req.ip}
          </p>
        </div>
      `
    };

    // Send auto-reply to user
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting Greybrain.ai',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>The Greybrain.ai Team</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private (add authentication middleware in production)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};