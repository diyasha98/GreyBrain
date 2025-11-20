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
            src={image} 
            alt="AI Healthcare Future" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center z-20 relative">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            The Ultimate Scientific Healthcare AI Studio
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-18 max-w-3xl mx-auto">
            Merging Medical Deep Expertise with Generative AI and Human-Centric Design
          </p>
          
          
          {/* Three D³ Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:transform hover:scale-105">
              <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-lg text-sm font-semibold mb-4 text-purple-300">
                DOMAIN
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">
                D<sup>1</sup>: Explainable
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Physiology-level medical deep expertise grounded in decades of clinical experience, ensuring AI solutions are medically sound and explainable to healthcare professionals.
              </p>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30 hover:border-pink-500 transition-all hover:transform hover:scale-105">
              <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-lg text-sm font-semibold mb-4 text-pink-300">
                DIGITAL
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">
                D<sup>2</sup>: Cutting-Edge
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ph.D.-level application of Generative AI and advanced machine learning, creating unparalleled possibilities for medical innovation and patient care.
              </p>
            </div>

            <div className="group bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-indigo-500/30 hover:border-indigo-500 transition-all hover:transform hover:scale-105">
              <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg text-sm font-semibold mb-4 text-indigo-300">
                DESIGN
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">
                D<sup>3</sup>: Empathetic
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Behavioral models and health economics combined to create solutions fundamentally designed for empathetic and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI School
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

      {/* Innovations Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovations
            </h2>
            <p className="text-xl text-gray-400">Transform your life with cutting-edge AI innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* GreyWaken Card */}
            <div 
              className="relative h-110 cursor-pointer perspective"
              onClick={() => toggleFlip('greywaken')}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards['greywaken'] ? 'rotate-y-180' : ''}`}>
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">🧠</div>
                    <h3 className="text-3xl font-bold mb-4 text-white">GreyWaken</h3>
                    <p className="text-gray-400 text-lg mb-6">AI-powered study guide for mastering Large Language Models in healthcare</p>
                    <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                      Click to learn more
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">GreyWaken</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-6">Master LLMs with interactive learning modules, personalized study paths, and real-world healthcare applications.</p>
                    <a 
                      href="http://greywaken.greybrain.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white font-semibold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      <span>Try GreyWaken</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical AI Assistant Card */}
            <div 
              className="relative h-110 cursor-pointer perspective"
              onClick={() => toggleFlip('gbsco')}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards['gbsco'] ? 'rotate-y-180' : ''}`}>
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Clinical AI Assist</h3>
                    <p className="text-gray-400 text-lg mb-6">Intelligent clinical decision support system,</p>
                    <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                      Click to learn more
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">Clinical AI Assist</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-4"> Multi-model AI for differential diagnosis, patient communication, and research integration</p>
                    <a 
                      href="http://aiassist.greybrain.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white font-semibold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      <span>Try Clinical AI Assist</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sage AI Card */}
            <div 
              className="relative h-110 cursor-pointer perspective"
              onClick={() => toggleFlip('sageai')}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards['sageai'] ? 'rotate-y-180' : ''}`}>
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Sage AI</h3>
                    <p className="text-gray-400 text-lg mb-6">Daily AI insights and healthcare updates</p>
                    <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                      Click for daily updates
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">Daily Updates</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-4">ConsciousAI is a modern, scholarly platform for the study of consciousness and the mind. Dive into 13 major Upanishads, 4 Mahavakyas, 30+ stories, and 20+ dialogues, with an intelligent AI companion — SageAI — guiding your journey. Each verse and story is paired with a psychological insight, correlating ancient teachings with modern scientific understanding, so you can apply timeless wisdom to today’s challenges.</p>
                    <a 
                      href="https://sageai.greybrain.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white font-semibold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      <span>Try Sage AI</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GreyBrainer Card */}
            <div className="relative mb-10">
              {/* Main Header Section */}
              <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-3xl font-bold mb-4 text-white">GreyBrainer</h3>
                  <p className="text-gray-400 text-lg mb-6">AI-powered movie review platform with intelligent insights</p>
                  <button
                    onClick={() => toggleFlip('greybrainer')}
                    className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    {flippedCards['greybrainer'] ? 'Hide Articles' : 'Click to see latest'}
                  </button>
                </div>

                {/* Articles Section - Expands Below */}
                <div className={`transition-all duration-700 overflow-hidden ${flippedCards['greybrainer'] ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-8 border-t border-purple-500/30">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Latest Articles
                      </h2>
                      <p className="text-lg text-gray-400">Stay updated with the AI-powered GreyBrainer articles</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-5 mb-8">
                      {newslettersData.map((newsletter) => (
                        <div 
                          key={newsletter.id}
                          className="relative h-96 cursor-pointer perspective"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(newsletter.id);
                          }}
                        >
                          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[newsletter.id] ? 'rotate-y-180' : ''}`}>
                            {/* Front of Card */}
                            <div className="absolute w-full h-full backface-hidden">
                              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-xl flex flex-col">
                                <div className={`inline-block px-4 py-1 bg-linear-to-r ${newsletter.color} rounded-full text-sm font-semibold mb-4 self-start`}>
                                  Articles
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
                                <button 
                                  className="flex items-center space-x-2 text-white font-semibold hover:underline"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <a href={newsletter.link} target="_blank" rel="noopener noreferrer">
                                    <span>Read Full Article</span>
                                  </a>
                                  <ExternalLink size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <a 
                        href="https://medium.com/@GreyBrainer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>See More on Medium</span>
                        <ExternalLink size={20} />
                      </a>
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
            <a href=""><h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovations at Work
            </h2></a>
            <p className="text-xl text-gray-400">Empowering healthcare innovation together</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnersData.map((partner) => (
              <div 
                key={partner.id}
                className="relative h-110 cursor-pointer perspective"
                onClick={() => toggleFlip(partner.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[partner.id] ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                      <img src={partner.logo} alt={`${partner.name} logo`} className="w-32 h-32 mb-4 object-contain mx-auto" />
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

      

      {/* Newsletter Subscribe Section */}
      <section className="py-20 px-4 relative">

          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Telegram Community
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Get the latest insights on AI in healthcare, course updates delivered to your inbox, along with discussions and a close-knit connection to the GreyBrain doctors & AI community.
            </p>

            <div className="max-w-md mx-auto">
              <a
                href="https://t.me/greybrainsoai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
              >
                <Send size={20} />
                <span>Join Telegram</span>
              </a>
            </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Join 500+ healthcare professionals already subscribed
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