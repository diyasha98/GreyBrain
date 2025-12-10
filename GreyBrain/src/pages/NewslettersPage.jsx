import React, { useState, useEffect } from 'react';
import { Loader2, ExternalLink, Star, ChevronRight } from 'lucide-react';

const NewslettersPage = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [mediumArticles, setMediumArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [articlesError, setArticlesError] = useState(null);

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const fetchMediumArticles = async () => {
    try {
      setLoadingArticles(true);
      const username = 'GreyBrain';
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
    
    const validImages = matches
      .map(match => match[1])
      .filter(url => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest AI-powered insights, and healthcare innovations from GreyBrain
          </p>
        </div>

        {/* Articles Section */}
        {loadingArticles ? (
          <div className="text-center py-20">
            <Loader2 className="w-16 h-16 animate-spin text-purple-400 mx-auto mb-6" />
            <p className="text-gray-400 text-lg">Loading latest articles...</p>
          </div>
        ) : articlesError ? (
          <div className="text-center py-20">
            <p className="text-red-400 text-xl mb-6">{articlesError}</p>
            <button 
              onClick={fetchMediumArticles}
              className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-semibold transition-all"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* Featured Articles Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {mediumArticles.slice(0, 6).map((article, idx) => (
                <div 
                  key={idx}
                  className="relative h-96 cursor-pointer perspective"
                  onClick={() => toggleFlip(`article-${idx}`)}
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
                            <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                              Article
                            </div>
                            <div className="flex items-center gap-2">
                              {/* <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-white/90 text-sm font-semibold">4.0/5</span> */}
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
                        <div className="h-full rounded-2xl overflow-hidden shadow-xl relative flex flex-col">
                          <img
                            src={article.backImage}
                            alt={article.title}
                            className="w-full h-full object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          
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
                        <div className="h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl flex flex-col relative">
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

            {/* View All Articles Button */}
            <div className="flex justify-center mb-12">
              <button
                onClick={() => toggleFlip('all-articles')}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
              >
                <span>{flippedCards['all-articles'] ? 'Hide All Articles' : 'View All Articles'}</span>
                <ChevronRight size={20} className={`transition-transform ${flippedCards['all-articles'] ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* All Articles List */}
            <div className={`transition-all duration-700 overflow-hidden ${flippedCards['all-articles'] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-purple-500/30 pt-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white">All Articles ({mediumArticles.length})</h3>
                  <button
                    onClick={() => toggleFlip('all-articles')}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-sm font-semibold transition-all"
                  >
                    Close
                  </button>
                </div>
                
                <div className="space-y-6">
                  {mediumArticles.map((article, idx) => (
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
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold whitespace-nowrap shrink-0">
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

            {/* Medium Link */}
            <div className="flex justify-center mt-12">
              <a 
                href="https://medium.com/@GreyBrain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all text-white"
              >
                <span>Visit Medium Profile</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </>
        )}
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

export default NewslettersPage;