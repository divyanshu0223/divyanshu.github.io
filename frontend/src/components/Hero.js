import React, { useEffect, useState } from 'react';
import { images } from '../assets/images';

const Hero = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Frontend Developer', 'Full Stack Developer', 'Software Engineer', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute -top-4 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${
          darkMode ? 'bg-pink-600' : 'bg-pink-300'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full ${
                darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'
              } opacity-75 blur animate-pulse`}></div>
              <img
                src={images.profile}
                alt="Divyanshu Jain"
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h2 className={`text-lg sm:text-xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up`}>
              Hello, It's Me
            </h2>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } animate-fade-in-up animation-delay-300`}>
              Divyanshu <span className={`${
                darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>Jain</span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              } animate-fade-in-up animation-delay-600`}>
                And I'm a{' '}
                <span className={`${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                } border-r-2 border-current animate-pulse`}>
                  {text}
                </span>
              </h3>
            </div>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in-up animation-delay-900`}>
              My first exposure to professional life through internship has benefited me mostly in
              strengthening my personal skills. I have developed a positive attitude and a strong
              sense of responsibility being innovative, resourceful, open and responsive to change.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 animate-fade-in-up animation-delay-1200">
            <button
              onClick={() => scrollToSection('about')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Learn More About Me
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-full text-lg font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className={`p-3 rounded-full ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
              aria-label="Scroll to about section"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;