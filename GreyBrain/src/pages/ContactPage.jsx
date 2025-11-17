import React, { useState } from 'react';
import { Mail, BookOpen, Linkedin, Twitter, Brain, Instagram } from 'lucide-react';

const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-right from-purple-400 to-pink-400 bg-clip-text text-gray-400">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">Let's collaborate to transform healthcare</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@greybrain.ai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Learning Platform</h3>
                    <a href="https://learn.greybrain.ai" className="text-purple-400 hover:text-purple-300">
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
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/greybrain.ai/" 
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://x.com/GreybrainAI" 
                  className="w-12 h-12 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-right from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-bold text-lg mb-2 text-white">Office Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Dr. John Doe"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@hospital.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Course inquiry, Partnership, etc."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-right from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;