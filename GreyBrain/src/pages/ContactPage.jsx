import React, { useState } from 'react';
import { Mail, BookOpen, Linkedin, Twitter, Brain, Instagram, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import axios from 'axios';

const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  // Backend URL 
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      
      if (error.response) {
        // Server responded with error
        setErrorMessage(error.response.data.message || 'Failed to send message');
      } else if (error.request) {
        // Request made but no response
        setErrorMessage('Server not responding. Please try again later.');
      } else {
        // Something else happened
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
      
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">Let's collaborate to transform healthcare</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@greybrain.ai" className="text-gray-400 hover:text-purple-400 transition-colors">
                      info@greybrain.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Learning Platform</h3>
                    <a 
                      href="https://learn.greybrain.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      learn.greybrain.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/greybrain/posts/?feedView=all" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/greybrain.ai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://x.com/GreybrainAI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 hover:scale-110 transition-all"
                  aria-label="Twitter/X"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-bold text-lg mb-2 text-white">Office Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start space-x-3 animate-in fade-in slide-in-from-top duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold">Message sent successfully!</p>
                  <p className="text-green-300 text-sm mt-1">
                    We've received your message and will get back to you within 24 hours. 
                    Check your email for a confirmation.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start space-x-3 animate-in fade-in slide-in-from-top duration-300">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-red-400 font-semibold">Failed to send message</p>
                  <p className="text-red-300 text-sm mt-1">{errorMessage}</p>
                  <p className="text-red-300 text-sm mt-2">
                    You can also email us directly at{' '}
                    <a href="mailto:info@greybrain.ai" className="underline hover:text-red-200">
                      info@greybrain.ai
                    </a>
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Dr. John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="john.doe@hospital.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Course inquiry, Partnership, etc."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;