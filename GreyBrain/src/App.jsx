import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ProductsPage from './pages/ProductsPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NewslettersPage from './pages/NewslettersPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleNavigate = (page, courseId = null) => {
    setCurrentPage(page);
    setSelectedCourseId(courseId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'courses' && <CoursesPage onNavigate={handleNavigate} selectedCourseId={selectedCourseId} />}
      {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
      {currentPage === 'partners' && <PartnersPage onNavigate={handleNavigate} />}
      {currentPage === 'newsletters' && <NewslettersPage onNavigate={handleNavigate}/>}
      {currentPage === 'about' && <AboutPage  onNavigate={handleNavigate}/>}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate}/>}


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 GreyBrain. Empowering doctors with AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;