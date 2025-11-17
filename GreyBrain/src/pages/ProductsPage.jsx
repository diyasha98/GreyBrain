import React, { useState } from 'react';
import { Lock, ChevronRight, Brain, ExternalLink } from 'lucide-react';
import { productsData } from '../data/products';

const ProductsPage = ({ onNavigate }) => {
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
            Innovative AI Tools
          </h1>
          <p className="text-xl text-gray-400">Powerful solutions for modern healthcare challenges</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productsData.map((product, idx) => (
            <div 
              key={idx}
              className="relative h-96 cursor-pointer perspective"
              onClick={() => product.isPublic && toggleFlip(idx)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[idx] && product.isPublic ? 'rotate-y-180' : ''}`}>
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all flex flex-col">
                    {!product.isPublic && (
                      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                          <p className="text-gray-300 mb-4">Coming Soon</p>
                          <button className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                            Get Notified
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="text-6xl mb-4">{product.image}</div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-semibold mb-3 text-purple-300 self-start">
                      {product.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
                    <p className="text-gray-400 mb-6 grow">{product.description}</p>
                    {product.isPublic && (
                      <a href={product.link} target="_blank"><div className="text-purple-400 font-semibold text-sm">Click to learn more →</div></a>
                    )}
                  </div>
                </div>

                {/* Back of Card */}
                {product.isPublic && (
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="h-full bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                      <p className="text-white/90 leading-relaxed mb-6">{product.fullDescription || product.description}</p>
                      {product.price && (
                        <p className="text-white text-xl font-bold mb-4">{product.price}</p>
                      )}
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        <span>Visit Product</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;