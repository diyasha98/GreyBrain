import React, { useState } from 'react';
import { ChevronRight, Brain, ExternalLink } from 'lucide-react';
import { partnersData } from '../data/partners';

const PartnersPage = ({ onNavigate }) => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Innovations at Work
          </h1>
          <p className="text-xl text-gray-400">Collaborating to transform healthcare with AI</p>
        </div>

        <div className="space-y-10 mb-16">
          {partnersData.map((partner) => (
            <div key={partner.id} className="relative">
              {partner.links.length === 1 ? (
                // Single Link Partner - Flip Card
                <div 
                  className="relative h-96 cursor-pointer perspective"
                  onClick={() => toggleFlip(partner.id)}
                >
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[partner.id] ? 'rotate-y-180' : ''}`}>
                    {/* Front of Card */}
                    <div className="absolute w-full h-full backface-hidden">
                      <div className="h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl flex flex-col items-center justify-center text-center">
                        <img src={partner.logo} alt={`${partner.name} logo`} className="w-32 h-32 mb-4 object-contain mx-auto" />
                        <h3 className="text-3xl font-bold mb-4 text-white">{partner.name}</h3>
                        <p className="text-gray-400 text-lg mb-6">{partner.description}</p>
                        <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                          Click to learn more
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                      <div className="h-full bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-white">{partner.name}</h3>
                        <p className="text-white/90 text-lg leading-relaxed mb-6">{partner.fullDescription || partner.description}</p>
                        <a 
                          href={partner.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white font-semibold hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                          <span>Visit {partner.links[0].text}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Multiple Links Partner - Expandable Section
                <div className="relative">
                  {/* Main Header Section */}
                  <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl">
                    <div className="flex flex-col items-center justify-center text-center">
                      <img src={partner.logo} alt={`${partner.name} logo`} className="w-32 h-32 mb-4 object-contain mx-auto" />
                      <h3 className="text-3xl font-bold mb-4 text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-lg mb-6">{partner.description}</p>
                      <button
                        onClick={() => toggleFlip(partner.id)}
                        className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                      >
                        {flippedCards[partner.id] ? 'Hide Solutions' : 'Explore Solutions'}
                      </button>
                    </div>

                    {/* Solutions Section - Expands Below */}
                    <div className={`transition-all duration-700 overflow-hidden ${flippedCards[partner.id] ? 'max-h-[5000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-8 border-t border-purple-500/30">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Our Solutions
                          </h2>
                          <p className="text-lg text-gray-400">Explore our comprehensive suite of AI-powered tools</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-5">
                          {partner.links.map((link, idx) => (
                            <div 
                              key={idx}
                              className="relative h-96 cursor-pointer perspective"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFlip(`${partner.id}-link-${idx}`);
                              }}
                            >
                              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[`${partner.id}-link-${idx}`] ? 'rotate-y-180' : ''}`}>
                                {/* Front of Card */}
                                <div className="absolute w-full h-full backface-hidden">
                                  <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-xl flex flex-col">
                                    <div className="inline-block px-4 py-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold mb-4 self-start">
                                      Solution
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{link.text}</h3>
                                    <p className="text-gray-400 text-sm mb-auto grow">{link.intro || 'Explore this innovative solution'}</p>
                                    <div className="text-purple-400 font-semibold text-sm mt-4">Click to learn more →</div>
                                  </div>
                                </div>

                                {/* Back of Card */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                                  <div className="h-full bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-xl flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-4 text-white">{link.text}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed mb-6">{link.intro || partner.description}</p>
                                    <a 
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-2 text-white font-semibold hover:underline text-sm"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <ExternalLink size={18} />
                                      <span>Visit Solution</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Become a Partner in Innovation</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing healthcare with AI. Let's collaborate to create innovative solutions that improve patient outcomes.
          </p>
          <button 
            onClick={() => onNavigate('contact')} 
            className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Innovate With Us
          </button>
        </div>
      </div>

      <style jsx>{`
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

export default PartnersPage;