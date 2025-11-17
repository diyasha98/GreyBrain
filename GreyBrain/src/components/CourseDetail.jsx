import React from 'react';
import { ArrowLeft, Clock, Award, Users } from 'lucide-react';

const CourseDetail = ({ course, onBack }) => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Courses</span>
        </button>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <div className={`inline-block px-4 py-1 bg-linear-to-r ${course.color} rounded-full text-sm font-semibold mb-4`}>
            {course.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{course.name}</h1>
          <p className="text-xl text-gray-300 mb-8">{course.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/50 rounded-xl p-4 border border-purple-500/10">
              <Clock className="text-purple-400 mb-2" size={24} />
              <div className="text-sm text-gray-400">Duration</div>
              <div className="text-lg font-semibold">{course.duration}</div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 border border-purple-500/10">
              <Award className="text-purple-400 mb-2" size={24} />
              <div className="text-sm text-gray-400">Level</div>
              <div className="text-lg font-semibold">{course.level}</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Course Modules</h3>
            <div className="space-y-3">
              {course.modules.map((module, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-gray-900/30 rounded-lg p-4">
                  <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-300">{module}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-purple-500/20">
            <div>
              <div className="text-sm text-gray-400 mb-1">Instructor</div>
              <div className="text-xl font-semibold text-white">{course.instructor}</div>
            </div>
            <div className="text-right">
              <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                <a href={course.link} target='_blank'>Enroll Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;