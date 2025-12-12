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
    groupDiscount: false
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
      // Google Apps Script Web App URL (you'll need to replace this)
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwsZeIzLm5_CKBX-eEPsx3i1xPUwf-6Ut4sM4F0dQTGO2oTS7OZRDPKsZ7bpJDwrLUD/exec';
      
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append('timestamp', new Date().toISOString());

      // Send to Google Sheets
      await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend
      });

      // Send email notifications
      const emailData = {
        to: ['pratichi@greybrain.ai', 'satish@greybrain.ai'],
        subject: 'New Workshop Registration - GenAI for Medicos',
        body: `
          New registration received:
          
          Name: ${formData.name}
          Designation: ${formData.designation}
          Institution: ${formData.institution}
          Phone: ${formData.phone}
          Email: ${formData.email}
          Group Discount Requested: ${formData.groupDiscount ? 'Yes' : 'No'}
          
          Timestamp: ${new Date().toLocaleString()}
        `
      };

      // Note: Email sending would be handled by Google Apps Script
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        designation: '',
        institution: '',
        phone: '',
        email: '',
        groupDiscount: false
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img 
            src={Logo2} 
            alt="GreyBrain School of AI" 
            className="h-40 sm:h-30 md:h-45 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Self-paced • Exclusive GreyWaken Access • AI Learning Companion</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Workshop: GenAI for Medicos
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Upskill Your Medical Students
            </p>

            <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-xl sm:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-transform">
              NOT OPTIONAL. NOT FUTURE. NOW.
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Workshop Details Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-purple-100 transform hover:scale-[1.02] transition-all duration-300">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                  Topics Covered
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Anatomy & Physiology of LLMs:</strong> What AI models are made of (Anatomy) and how they think and work (Physiology)
                    </p>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>AI For Learning, Analytics, Presentations</strong>
                    </p>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>AI For Deep Research, Academic Research, Paper Writing</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-600">SINGLE DAY</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">4 HOURS</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-semibold text-gray-600">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <p className="text-lg font-bold text-indigo-600">100-500</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Students</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">CONTACT US</p>
                    <p className="font-semibold">+91 9611358504</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <AtSign className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">FOLLOW US</p>
                    <p className="font-semibold">@greybrain.ai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-indigo-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Register Your Interest
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="designation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="e.g., Professor, HOD, Dean"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Medical college/university name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="your.email@institution.edu"
                  />
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="groupDiscount"
                      checked={formData.groupDiscount}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      We offer discounts for groups of 10 or more. Please select this box if you are registering as a group of 10 or more to be eligible for group discounts.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                    <p className="font-semibold">Registration Successful!</p>
                    <p className="text-sm">We'll contact you soon with more details.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 text-center text-gray-600">
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