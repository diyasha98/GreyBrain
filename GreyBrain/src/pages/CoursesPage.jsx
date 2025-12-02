import React, { useState, useEffect } from 'react';
import { Clock, Users, Star, ChevronRight, Brain} from 'lucide-react';
import { coursesData } from '../data/courses';
import CourseDetail from '../components/CourseDetail';

const CoursesPage = ({ onNavigate, selectedCourseId }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (selectedCourseId) {
      const course = coursesData.find(c => c.id === selectedCourseId);
      setSelectedCourse(course);
    }
  }, [selectedCourseId]);

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  // Separate courses into available and coming soon
  const availableCourses = coursesData.filter(course => course.type !== "Coming Soon");
  const comingSoonCourses = coursesData.filter(course => course.type === "Coming Soon");

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-right from-purple-400 to-pink-400 bg-clip-text text-gray-400">
            Master AI in Healthcare
          </h1>
          <p className="text-xl text-gray-400">Comprehensive courses designed for healthcare professionals</p>
        </div>

        <div>
          <p className="text-4xl font-bold mb-10 text-purple-400 flex justify-center">Coming Soon(Register Now)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 ">
          {comingSoonCourses.map((course, idx) => (
            <div 
              key={idx}
              className="group bg-linear-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/60 hover:border-purple-400 transition-all hover:transform hover:scale-105 cursor-pointer shadow-lg shadow-purple-500/20"
              onClick={() => setSelectedCourse(course)}
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-right ${course.color} rounded-full text-sm font-semibold mb-4 animate-pulse shadow-lg`}>
                {course.type1}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">{course.name}
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              </h3>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {course.duration}
                </span>
                <span className="flex items-center">
                  <Users size={16} className="mr-1" /> {course.students}
                </span>
                <span className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-400" /> {course.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <button className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold">
                  <span>View Details</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-4xl font-bold mb-10 text-purple-400 flex justify-center">Ongoing Courses</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 ">
          {availableCourses.map((course, idx) => (
            <div 
              key={idx}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className={`inline-block px-4 py-1 bg-gradient-to-right ${course.color} rounded-full text-sm font-semibold mb-4`}>
                {course.type}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{course.name}</h3>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {course.duration}
                </span>
                <span className="flex items-center">
                  <Users size={16} className="mr-1" /> {course.students}
                </span>
                <span className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-400" /> {course.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-400">{course.price}</span>
                <button className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold">
                  <span>View Details</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default CoursesPage;