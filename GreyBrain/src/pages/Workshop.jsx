import React, { useState } from 'react';
import { Brain, Calendar, MapPin, Users, CheckCircle, Phone, AtSign, Sparkles } from 'lucide-react';
import Logo2 from '../assets/gb-logo2.png';

export default function GreyBrainWorkshop() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    institution: '',
    phone: '',
    email: '',
    groupDiscount: false,
    isMedicalStudent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxaom4uGFl0XIIf7Xg_iP0ludyXg2DxeS5khLXIVqJQfnj3mzE2JuUTZBVNSQhTu5c3/exec';
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append('timestamp', new Date().toISOString());

      await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        designation: '',
        institution: '',
        phone: '',
        email: '',
        groupDiscount: false,
        isMedicalStudent: false
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 pb-2 px-4 sm:px-6 lg:px-8 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img 
            src={Logo2} 
            alt="GreyBrain School of AI" 
            className="w-64 sm:w-70 md:w-86 lg:w-[20rem] xl:w-[20rem] object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-8 px-4 sm:px-6 lg:px-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Self-paced • Exclusive GreyWaken Access • AI Learning Companion</span>
              <span className="sm:hidden">Self-paced • GreyWaken Access</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight px-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Workshop: GenAI for Doctors
            </h1>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-medium mb-8 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Upgrade Your Medical Output
            </p>

            <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-transform mx-4">
              NOT OPTIONAL. NOT FUTURE. NOW.
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
            
            {/* Workshop Details Card */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-14 border border-purple-500 border-opacity-30 transform hover:scale-[1.02] transition-all duration-300">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-400" />
                  Topics Covered
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-purple-900 bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-colors border border-purple-500 border-opacity-20">
                    <CheckCircle className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                    <p className="text-gray-200 leading-relaxed">
                      <strong className="text-purple-300">Anatomy & Physiology of LLMs:</strong> Understand what AI models are made of (Anatomy) and the principles of how they "think" and work (Physiology).
                    </p>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-blue-900 bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-colors border border-blue-500 border-opacity-20">
                    <CheckCircle className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <p className="text-gray-200 leading-relaxed">
                      <strong className="text-blue-300">AI for Professional Application:</strong> Leverage AI to create compelling presentations, websites, patient infographics, and documentation.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-indigo-900 bg-opacity-30 rounded-xl hover:bg-opacity-50 transition-colors border border-indigo-500 border-opacity-20">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <p className="text-gray-200 leading-relaxed">
                      <strong className="text-indigo-300">AI for Academic Excellence:</strong> Utilize AI for deep research, streamlined academic review, and high-impact paper writing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                <div className="bg-gradient-to-br from-purple-900 to-purple-800 bg-opacity-40 p-4 rounded-xl border border-purple-500 border-opacity-30">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">SINGLE DAY</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-purple-300">4 HOURS</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 bg-opacity-40 p-4 rounded-xl border border-indigo-500 border-opacity-30">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-indigo-400" />
                    <p className="text-lg sm:text-xl font-bold text-indigo-300">100-500</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Students</p>
                </div>
              </div>

              {/* Contact Info & Socials */}
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="bg-purple-900 bg-opacity-40 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">CONTACT US</p>
                      <a href="tel:+919611358504" className="font-semibold hover:text-purple-400 transition-colors">+91 9611358504</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="bg-indigo-900 bg-opacity-40 p-2 rounded-full">
                      <AtSign className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">EMAIL</p>
                      <a href="mailto:pratichi@greybrain.ai" className="font-semibold hover:text-indigo-400 transition-colors text-sm">pratichi@greybrain.ai</a>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-col items-center pt-4 space-y-3">
                  {/* Line 1: Social Media - Both centered in one line */}
                  <div className="flex gap-3 justify-center">
                    <a 
                      href="https://in.linkedin.com/company/greybrain" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="font-semibold text-sm">LinkedIn</span>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/greybrain.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="font-semibold text-sm">Instagram</span>
                    </a>
                  </div>
                  
                  {/* Line 2: Explore GreyWaken text */}
                  <p className="text-sm text-gray-300 font-semibold">Explore GreyWaken</p>
                  
                  {/* Line 3: GreyWaken Link */}
                  <a 
                    href="https://greywaken.greybrain.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Brain className="w-5 h-5" />
                    <span className="font-semibold text-sm">GreyWaken</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-indigo-500 border-opacity-30">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Register Your Interest
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="designation" className="block text-sm font-semibold text-gray-200 mb-2">
                    Designation <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 outline-none transition-all"
                    placeholder="e.g., Professor, HOD, Dean"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-200 mb-2">
                    Institution <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 outline-none transition-all"
                    placeholder="Medical college/ University/ Hospital/ Clinic name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 outline-none transition-all"
                    placeholder="your.email@institution.edu"
                  />
                </div>

                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-xl border border-blue-500 border-opacity-30">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isMedicalStudent"
                      checked={formData.isMedicalStudent}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-400"
                    />
                    <span className="text-sm text-gray-200 leading-relaxed">
                      I am currently a medical student
                    </span>
                  </label>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded-xl border border-purple-500 border-opacity-30">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="groupDiscount"
                      checked={formData.groupDiscount}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-purple-400"
                    />
                    <span className="text-sm text-gray-200 leading-relaxed">
                      We offer discounts for groups of 10 or more. Please select this box if you are registering as a group of 10 or more to be eligible for group discounts.
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-900 bg-opacity-50 border border-green-500 border-opacity-50 text-green-300 px-4 py-3 rounded-xl">
                    <p className="font-semibold">Registration Successful!</p>
                    <p className="text-sm">We'll contact you soon with more details.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900 bg-opacity-50 border border-red-500 border-opacity-50 text-red-300 px-4 py-3 rounded-xl">
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 text-center text-gray-400">
        <p className="text-sm">© 2026 GreyBrain School of AI. All rights reserved.</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}