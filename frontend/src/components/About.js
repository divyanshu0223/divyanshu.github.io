import React, { useEffect, useRef, useState } from 'react';

const About = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const stats = [
    { number: '8.5', label: 'CGPA', suffix: '/10' },
    { number: '3+', label: 'Technologies', suffix: '' },
    { number: '100%', label: 'Dedication', suffix: '' },
    { number: '24/7', label: 'Learning', suffix: '' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            About <span className={`${
              darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                I'm Divyanshu Jain & I'm from Sagar
              </h3>
              
              <div className={`text-lg leading-relaxed space-y-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  I'm an engineering graduate from <span className={`font-semibold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>Medicaps College</span> specialized in Computer Science. I've worked hard in my education & maintained a CGPA of <span className={`font-semibold ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>8.5</span>.
                </p>
                
                <p>
                  Along with my degree I've completed <span className={`font-semibold ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>Java, SQL and Full Stack Courses</span> online. Now I'm ready to apply my knowledge into practice.
                </p>
                
                <p>
                  Though I do not have any real life working experience, I've had a lot of exposure to the software field. My Goal is to build a successful career as a <span className={`font-semibold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>Full Stack Developer</span>.
                </p>
                
                <p>
                  Moving forward in my career I hope to expand my experience across different industries. I'm a good learner and team player with strong <span className={`font-semibold ${
                    darkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>communication skills</span> and a positive attitude.
                </p>
              </div>
            </div>

            {/* Key Qualities */}
            <div className="space-y-3">
              <h4 className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Key Qualities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Innovative & Resourceful',
                  'Open to Change',
                  'Strong Responsibility',
                  'Lifelong Learning',
                  'Attentive Listener',
                  'Effective Communication'
                ].map((quality, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                    } shadow-sm hover:shadow-md`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {quality}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Visual Elements */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'
                  } shadow-lg`}
                >
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {stat.number}
                    <span className={`text-lg ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <div className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Education & Learning Journey</h4>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Computer Science Engineering',
                    institution: 'Medicaps College',
                    period: 'Graduated',
                    description: 'Specialized in software development and computer systems'
                  },
                  {
                    title: 'Full Stack Development',
                    institution: 'Online Courses',
                    period: 'Completed',
                    description: 'Java, SQL, and modern web technologies'
                  },
                  {
                    title: 'Professional Internship',
                    institution: 'Industry Experience',
                    period: 'Experience',
                    description: 'Developed personal skills and professional attitude'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></div>
                      {index < 2 && (
                        <div className={`w-0.5 h-12 ${
                          darkMode ? 'bg-gray-600' : 'bg-gray-300'
                        }`}></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <h5 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h5>
                      <p className={`text-sm ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {item.institution} • {item.period}
                      </p>
                      <p className={`text-sm mt-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;