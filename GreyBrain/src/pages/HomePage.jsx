import React, { useState } from 'react';
import { Sparkles, BookOpen, Package, ChevronRight, Users, Clock, Brain, Zap, Award, TrendingUp, Mail, Send, ExternalLink, FlaskConical } from 'lucide-react';
import { coursesData } from '../data/courses';
// import { productsData } from '../data/products';
import { partnersData } from '../data/partners';
import { newslettersData } from '../data/newsletters';
import image from '../assets/Hero.jpeg'



const HomePage = ({ onNavigate }) => {

  const [flippedCards, setFlippedCards] = useState({});
  const [email, setEmail] = useState('');

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-purple-900/10 to-gray-900 text-white">
      
      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/70 via-purple-900/50 to-gray-900/90 z-10"></div>
          <img 
            src= {image} 
            alt="AI Healthcare Future" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center z-20 relative">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            AI for Doctors, Built by Doctors
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering Healthcare Professionals with AI + Intuition
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            At GreyBrain, we believe AI should amplify doctors, not replace them. Explore our courses, products, and partnerships transforming healthcare.
          </p>
          
          {/* Three Main CTAs */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:transform hover:scale-105 cursor-pointer">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Educational Courses</h3>
              <p className="text-gray-400 mb-6">Master AI without coding. Transform your clinical practice, research, and business.</p>
              <button
              onClick={() => onNavigate('courses')} 
              className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2 mx-auto">
                <span>Explore Courses</span>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30 hover:border-pink-500 transition-all hover:transform hover:scale-105 cursor-pointer">
              <Package className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">AI Products & Apps</h3>
              <p className="text-gray-400 mb-6">Custom web apps solving real problems: from embryo grading to child health assessment.</p>
              <button 
              onClick={() => onNavigate('products')} 
              className="px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center justify-center space-x-2 mx-auto">
                <span>View Products</span>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-indigo-500/30 hover:border-indigo-500 transition-all hover:transform hover:scale-105 cursor-pointer">
              <Users className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Our Partners</h3>
              <p className="text-gray-400 mb-6">Powering innovation at leading healthcare organizations like Santaan and SKIDS.</p>
              <button 
              onClick={() => onNavigate('partners')} 
              className="px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center space-x-2 mx-auto">
                <span>Our Impact</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-400">Transform your practice with cutting-edge AI education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-4">{course.thumbnail}</div>
                <div className={`inline-block px-4 py-1 bg-linear-to-r ${course.color} rounded-full text-sm font-semibold mb-4`}>
                  {course.type}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{course.name}</h3>
                <p className="text-gray-400 mb-6">{course.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center"><Clock size={16} className="mr-1" /> {course.duration}</span>
                  <span className="flex items-center"><Users size={16} className="mr-1" /> {course.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">₹{course.price}</span>
                  <button 
                  onClick={() => onNavigate('courses', course.id)} 
                  className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold">
                    <span>Learn More</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - GreyWaken */}
      <section className="py-20 px-4 relative bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border-2 border-purple-500/30 backdrop-blur-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-6">
                  Featured Product
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  GreyWaken
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  An AI-powered study guide designed to help you master Large Language Models (LLMs) and unlock the full potential of AI in healthcare.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Zap className="text-purple-400" size={24} />
                    <span className="text-gray-300">Interactive learning modules</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="text-purple-400" size={24} />
                    <span className="text-gray-300">Personalized study paths</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="text-purple-400" size={24} />
                    <span className="text-gray-300">Real-world healthcare applications</span>
                  </li>
                </ul>
                <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center space-x-2">
                  <FlaskConical size={20} />
                  <a href="http://greywaken.greybrain.ai" target="_blank"><span>Try GreyWaken</span></a>
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="text-6xl mb-4 text-center">🧠</div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">AI-Powered Learning</div>
                    <div className="text-purple-200">Master LLMs at your own pace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section with Flip Cards */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Innovations
            </h2>
            <p className="text-xl text-gray-400">Empowering healthcare innovation together</p>
          </div>
          
          <div className="grid md:grid-cols gap-8 max-w-5xl mx-auto">
            {partnersData.map((partner) => (
              <div 
                key={partner.id}
                className="relative h-96 cursor-pointer perspective"
                onClick={() => toggleFlip(partner.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[partner.id] ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                      <div className="text-6xl mb-4">{partner.logo}</div>
                      <h3 className="text-3xl font-bold mb-4 text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-lg mb-6">{partner.description}</p>
                      <div className={`inline-block px-4 py-2 bg-linear-to-r ${partner.color} rounded-full text-sm font-semibold`}>
                        Click to learn more
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className={`h-full bg-linear-to-br ${partner.color} rounded-2xl p-8 shadow-xl flex flex-col justify-center`}>
                      <h3 className="text-2xl font-bold mb-4 text-white">{partner.name}</h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-6">{partner.fullDescription}</p>
                      <div className="space-y-3">
                        <p className="text-white font-semibold mb-2">Visit our solutions:</p>
                        {partner.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-purple-400 hover:text-purple-200 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} />
                            <span>{link.text}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Cards Section with Flip Animation */}
      <section className="py-20 px-4 relative bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-400">Stay updated with the latest in AI healthcare</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newslettersData.map((newsletter) => (
              <div 
                key={newsletter.id}
                className="relative h-80 cursor-pointer perspective"
                onClick={() => toggleFlip(newsletter.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[newsletter.id] ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-xl flex flex-col">
                      <div className={`inline-block px-4 py-1 bg-linear-to-r ${newsletter.color} rounded-full text-sm font-semibold mb-4 self-start`}>
                        Newsletter
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{newsletter.title}</h3>
                      <p className="text-gray-500 text-sm mb-4">{newsletter.date}</p>
                      <p className="text-gray-400 mb-6 grow">{newsletter.preview}</p>
                      <div className="text-purple-400 font-semibold text-sm">Click to read more →</div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className={`h-full bg-linear-to-br ${newsletter.color} rounded-2xl p-8 shadow-xl flex flex-col justify-center`}>
                      <h3 className="text-2xl font-bold mb-4 text-white">{newsletter.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-6">{newsletter.fullContent}</p>
                      <button className="flex items-center space-x-2 text-white font-semibold hover:underline">
                        <span>Read Full Article</span>
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get the latest insights on AI in healthcare, course updates, and exclusive content delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-full focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 backdrop-blur-sm"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center space-x-2"
              >
                <Send size={20} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Join 5,000+ healthcare professionals already subscribed
          </p>
        </div>
      </section>

      

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default HomePage;