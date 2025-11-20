import React from 'react';
import { BookOpen, Package, Handshake, Brain } from 'lucide-react';

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-right from-purple-400 to-pink-400 bg-clip-text text-gray-400">
            Our Vision
          </h1>
          <p className="text-xl text-gray-400">AI for Doctors, Built by Doctors</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            GreyBrain exists at the intersection of medicine and artificial intelligence. We believe AI should amplify doctors, not replace them. Our mission is to empower healthcare professionals with the knowledge and tools to leverage AI in their practice while maintaining the human touch that defines great medicine.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Founded by practicing physicians who understand the real challenges of modern healthcare, GreyBrain bridges the gap between cutting-edge AI technology and practical clinical application. We're committed to making AI accessible, ethical, and truly useful for healthcare professionals worldwide.
          </p>
        </div>

        <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">The 3D Framework</h2>
          <p className="text-lg text-gray-300 text-center mb-10 max-w-3xl mx-auto">
            Our approach to healthcare AI integration is built upon three fundamental pillars that ensure sustainable transformation and meaningful impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-14 h-14 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">D1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-white">Domain</h3>
              <p className="text-gray-400 text-center">
                Physiology-level medical deep expertise grounded in decades of clinical experience, ensuring AI solutions are medically sound and explainable to healthcare professionals.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-14 h-14 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">D2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-white">Digital</h3>
              <p className="text-gray-400 text-center">
                Ph.D.-level application of Generative AI and advanced machine learning, creating unparalleled possibilities for medical innovation and patient care.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-14 h-14 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">D3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-white">Design</h3>
              <p className="text-gray-400 text-center">
                Behavioral models and health economics combined to create solutions fundamentally designed for empathetic and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
            <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Education</h3>
            <p className="text-gray-400">Comprehensive AI courses designed specifically for healthcare professionals</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
            <Package className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-400">Cutting-edge tools that solve real clinical and research challenges</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
            <Handshake className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Community</h3>
            <p className="text-gray-400">Building a global network of AI-empowered healthcare professionals</p>
          </div>
        </div>

        <div className="bg-gradient-to-right from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex space-x-4">
              <div className="shrink-0 w-10 h-10 bg-gradient-to-right from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Patient-Centered</h4>
                <p className="text-gray-400">Every tool and course we create puts patient care and outcomes first.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="shrink-0 w-10 h-10 bg-gradient-to-right from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Evidence-Based</h4>
                <p className="text-gray-400">We ground our teaching in clinical evidence and real-world results.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="shrink-0 w-10 h-10 bg-gradient-to-right from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Ethical AI</h4>
                <p className="text-gray-400">We prioritize transparency, privacy, and responsible AI use in healthcare.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="shrink-0 w-10 h-10 bg-gradient-to-right from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Continuous Learning</h4>
                <p className="text-gray-400">We stay at the forefront of AI innovation to bring you the latest tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;