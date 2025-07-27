import React, { useEffect, useRef, useState } from 'react';
import { images } from '../assets/images';

const Skills = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      name: 'Python',
      level: 85,
      image: images.python,
      description: 'Backend development, data structures, algorithms',
      projects: 'Web scraping, API development, automation scripts'
    },
    {
      name: 'HTML',
      level: 90,
      image: images.html,
      description: 'Semantic markup, accessibility, modern HTML5',
      projects: 'Responsive websites, web applications, landing pages'
    },
    {
      name: 'CSS',
      level: 88,
      image: images.css,
      description: 'Modern CSS, Flexbox, Grid, animations',
      projects: 'UI/UX design, responsive layouts, custom animations'
    },
    {
      name: 'Java',
      level: 80,
      image: images.java,
      description: 'Object-oriented programming, data structures',
      projects: 'Desktop applications, algorithms, system design'
    }
  ];

  const additionalSkills = [
    { name: 'SQL', category: 'Database', level: 75 },
    { name: 'JavaScript', category: 'Frontend', level: 82 },
    { name: 'React', category: 'Framework', level: 78 },
    { name: 'Git', category: 'Tools', level: 85 },
    { name: 'Problem Solving', category: 'Soft Skills', level: 90 },
    { name: 'Team Collaboration', category: 'Soft Skills', level: 88 }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            My <span className={`${
              darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>Skills</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}></div>
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
            Here are the technologies and skills I've been working with. I'm always eager to learn new technologies and expand my skill set.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group ${
                darkMode ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-white'
              } p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : 'opacity-0'
              }`}
            >
              {/* Skill Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full ${
                    darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'
                  } opacity-75 blur animate-pulse group-hover:animate-none`}></div>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="relative w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-lg transform group-hover:rotate-6 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className={`text-xl font-bold text-center mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </h3>

              {/* Progress Circle */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={darkMode ? '#374151' : '#e5e7eb'}
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={darkMode ? '#60a5fa' : '#3b82f6'}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={
                        animateProgress 
                          ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}`
                          : `${2 * Math.PI * 40}`
                      }
                      className="transition-all duration-2000 ease-out"
                    />
                  </svg>
                  <div className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {animateProgress ? `${skill.level}%` : '0%'}
                  </div>
                </div>
              </div>

              {/* Skill Description */}
              <p className={`text-sm text-center mb-3 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {skill.description}
              </p>

              {/* Projects/Experience */}
              <div className={`text-xs text-center p-3 rounded-lg ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <span className="font-semibold">Experience: </span>
                {skill.projects}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`${isVisible ? 'animate-fade-in-up animation-delay-1000' : 'opacity-0'}`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Skills & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-4 rounded-xl ${
                  darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
                } hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </h4>
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.category}
                    </p>
                  </div>
                  <span className={`text-sm font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className={`w-full bg-gray-300 rounded-full h-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className={`h-2 rounded-full transition-all duration-1500 ease-out ${
                      darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    }`}
                    style={{
                      width: animateProgress ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 text-center ${
          isVisible ? 'animate-fade-in-up animation-delay-1200' : 'opacity-0'
        }`}>
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Always Learning & Growing
            </h3>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring advanced React patterns, cloud technologies, and modern development practices.
            </p>
            <div className="mt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;