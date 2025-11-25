import React from 'react';
import { Brain, Linkedin, Twitter, Instagram } from 'lucide-react';
import Hero2 from '../assets/Hero2.png';
import Logo from '../assets/gb-logo.png';


const PreviewPage = () => {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col" style={{ background: '#240030' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg shadow-lg shadow-purple-500/10" style={{ backgroundColor: 'rgba(36, 0, 48, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-32">
            <div className="flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="GreyBrain Logo" 
                className="w-auto h-25"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow flex items-center justify-center pt-32 px-4">
        <div className="max-w-4xl w-full text-center">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={Hero2} 
              alt="Generative AI for Doctors" 
              className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl shadow-purple-500/20"
            />
          </div>

          {/* Register Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfoYOCZX9KiQLrHERKZUgt_Cck_z3PP67kdHmV8GK9LcMVMDg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
            PRE-REGISTER
            </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20" style={{ backgroundColor: '#240030' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex space-x-6">
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

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; 2024 GreyBrain. Empowering doctors with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreviewPage;