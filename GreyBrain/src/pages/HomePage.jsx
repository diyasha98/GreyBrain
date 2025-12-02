import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Package, ChevronRight, Users, Clock, Brain, Zap, Award, TrendingUp, Mail, Send, ExternalLink, FlaskConical, Star, Loader2 } from 'lucide-react';
import { coursesData } from '../data/courses';
// import { productsData } from '../data/products';
import { partnersData } from '../data/partners';
// import { newslettersData } from '../data/newsletters';
import image from '../assets/Hero.jpeg'



const HomePage = ({ onNavigate }) => {

  const [flippedCards, setFlippedCards] = useState({});
  //const [email, setEmail] = useState('');
  const [mediumArticles, setMediumArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [articlesError, setArticlesError] = useState(null);

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const fetchMediumArticles = async () => {
    try {
      setLoadingArticles(true);
      const username = 'GreyBrainer';
      const rssUrl = `https://medium.com/feed/@${username}`;
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();

      
      if (data.status === 'ok') {
        const formattedArticles = data.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate),
          description: item.description.replace(/<[^>]*>/g, '').substring(0, 200),
          thumbnail: item.thumbnail || extractImageFromContent(item.content, 0),
          backImage: extractImageFromContent(item.content, 1) || null, 
          categories: item.categories || []
        }));
        //console.log(formattedArticles);
        setMediumArticles(formattedArticles);
      } else {
        setArticlesError('Failed to fetch articles');
      }
    } catch (err) {
      setArticlesError('Error loading articles');
      console.error(err);
    } finally {
      setLoadingArticles(false);
    }
  };

  const extractImageFromContent = (content, imageIndex = 0) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const matches = [...content.matchAll(imgRegex)];
  
  // Filter out tracking pixels and non-image URLs
  const validImages = matches
    .map(match => match[1])
    .filter(url => {
      // Exclude Medium tracking URLs and ensure it's an actual image
      return !url.includes('/_/stat?') && 
             !url.includes('medium.com/_/stat') &&
             (url.includes('.jpg') || url.includes('.jpeg') || 
              url.includes('.png') || url.includes('.gif') || 
              url.includes('.webp') || url.includes('cdn-images'));
    });
  
  return validImages[imageIndex] || null;
};

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
            {coursesData.slice(-3).map((course) => (
              <div 
                key={course.id}
                className="group bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {course.thumbnail}
                  </div>
                  <div className={`inline-block px-4 py-1.5 bg-linear-to-r ${course.color} rounded-full text-sm font-bold mb-4 shadow-lg`}>
                    {course.type}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center bg-gray-700/50 px-3 py-1.5 rounded-lg">
                      <Clock size={16} className="mr-1.5 text-purple-400" /> {course.duration}
                    </span>
                    <span className="flex items-center bg-gray-700/50 px-3 py-1.5 rounded-lg">
                      <Users size={16} className="mr-1.5 text-purple-400" /> {course.students}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <span className="text-2xl font-bold text-purple-400"></span>
                    <button 
                      onClick={() => onNavigate('courses', course.id)} 
                      className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-all"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                    </button>
                  </div>
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
                    <p className="text-white/90 text-lg leading-relaxed mb-4">ConsciousAI is a modern, scholarly platform for the study of consciousness and the mind. Dive into 13 major Upanishads, 4 Mahavakyas, 30+ stories, and 20+ dialogues, with an intelligent AI companion — SageAI — guiding your journey. Each verse and story is paired with a psychological insight, correlating ancient teachings with modern scientific understanding, so you can apply timeless wisdom to today's challenges.</p>
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
            <div className={`transition-all duration-700 overflow-hidden ${flippedCards['greybrainer'] ? 'max-h-[5000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
              <div className="pt-8 border-t border-purple-500/30">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Latest Articles
                  </h2>
                  <p className="text-lg text-gray-400">Stay updated with the AI-powered GreyBrainer articles</p>
                </div>
                
                {loadingArticles ? (
                  <div className="text-center py-12">
                    <Loader2 className="w-12 h-12 animate-spin text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-400">Loading latest articles...</p>
                  </div>
                ) : articlesError ? (
                  <div className="text-center py-12">
                    <p className="text-red-400 mb-4">{articlesError}</p>
                    <button 
                      onClick={fetchMediumArticles}
                      className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-semibold transition-all"
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Latest 3 Articles in Card Grid */}
                    <div className="grid md:grid-cols-3 gap-5 mb-8">
                      {mediumArticles.slice(0, 3).map((article, idx) => (
                        <div 
                          key={idx}
                          className="relative h-96 cursor-pointer perspective"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(`article-${idx}`);
                          }}
                        >
                          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[`article-${idx}`] ? 'rotate-y-180' : ''}`}>
                            {/* Front of Card */}
                            <div className="absolute w-full h-full backface-hidden">
                              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-xl flex flex-col">
                                {article.thumbnail && (
                                  <div className="h-48 overflow-hidden bg-gray-700">
                                    <img
                                      src={article.thumbnail}
                                      alt={article.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                      <div className="inline-block px-4 py-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold self-start">
                                        Article
                                      </div>
                                      {/* Rating Section */}
                                      <div className="flex items-center gap-2 mb-4">
                                        <div className="flex">
                                          {[...Array(5)].map((_, i) => (
                                            <Star 
                                              key={i} 
                                              className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                            />
                                          ))}
                                        </div>
                                        <span className="text-white/90 text-sm font-semibold">4.0/5</span>
                                      </div>
                                    </div>

                                  <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">{article.title}</h3>
                                  <p className="text-gray-500 text-xs mb-4">{formatDate(article.pubDate)}</p>
                                  <div className="mt-auto">
                                    <div className="text-purple-400 font-semibold text-sm">Click to read more →</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Back of Card */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180">                 
                              {article.backImage ? (
                                // Hero Image Layout - when backImage exists
                                <div className="h-full rounded-2xl overflow-hidden shadow-xl relative flex flex-col">
                                  <img
                                    src={article.backImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover absolute inset-0"
                                  />
                                  {/* Dark overlay for better link visibility */}
                                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                                  
                                  {/* Link positioned at bottom */}
                                  <div className="relative z-10 mt-auto p-6">
                                    <a 
                                      href={article.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-2 text-white font-semibold hover:underline"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <ExternalLink size={18} />
                                      <span>Read Full Article</span>
                                    </a>
                                  </div>
                                </div>
                              ) : (
                                // Original Layout when no backImage
                                <div className="h-full bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl flex flex-col relative">
                                  <div className="p-6 flex flex-col flex-1 relative z-10">
                                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{article.title}</h3>
                                    
                                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4">{article.description}...</p>
                                    
                                    {article.categories && article.categories.length > 0 && (
                                      <div className="flex flex-wrap gap-2 mb-4">
                                        {article.categories.slice(0, 3).map((cat, i) => (
                                          <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                            {cat}
                                          </span>
                                        ))}
                                      </div>
                                    )}

                                    <div className="mt-auto">
                                      <a 
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-white font-semibold hover:underline"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink size={18} />
                                        <span>Read Full Article</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip('all-articles');
                        }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all text-white"
                      >
                        <span>See All Articles</span>
                        <ChevronRight size={20} />
                      </button>
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

                    {/* All Articles List View */}
                    <div className={`transition-all duration-700 overflow-hidden ${flippedCards['all-articles'] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="border-t border-purple-500/30 pt-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-white">All Articles ({mediumArticles.length})</h3>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip('all-articles');
                            }}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-sm font-semibold transition-all"
                          >
                            Close
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          {mediumArticles.slice(3).map((article, idx) => (
                            <div 
                              key={idx}
                              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all p-6 flex flex-col md:flex-row gap-6"
                            >
                              {article.thumbnail && (
                                <div className="md:w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-700">
                                  <img
                                    src={article.thumbnail}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              
                              <div className="flex-1 flex flex-col">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                  <h4 className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                                    {article.title}
                                  </h4>
                                  <span className="px-3 py-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold whitespace-nowrap shrink-0">
                                    Article
                                  </span>
                                </div>
                                
                                <p className="text-gray-500 text-sm mb-3">{formatDate(article.pubDate)}</p>
                                
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.description}</p>
                                
                                {article.categories && article.categories.length > 0 && (
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {article.categories.slice(0, 4).map((cat, i) => (
                                      <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                                        {cat}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                
                                <div className="mt-auto">
                                  <a 
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span>Read Full Article</span>
                                    <ExternalLink size={16} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Partners Section with Expandable Cards */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovations at Work
            </h2>
            <p className="text-xl text-gray-400">Empowering healthcare innovation together</p>
          </div>
          
          <div className="space-y-10">
            {partnersData.map((partner) => (
              <div key={partner.id} className="relative">
                {partner.links.length === 1 ? (
                  // Single Link Partner - Flip Card (matches Innovations section style)
                  <div 
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
                          <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                            Click to learn more
                          </div>
                        </div>
                      </div>

                      {/* Back of Card */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180">
                        <div className="h-full bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4 text-white">{partner.name}</h3>
                          <p className="text-white/90 text-lg leading-relaxed mb-6">{partner.description}</p>
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
                  // Multiple Links Partner - Expandable Section (matches GreyBrainer style)
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
                                className="relative h-110 cursor-pointer perspective"
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