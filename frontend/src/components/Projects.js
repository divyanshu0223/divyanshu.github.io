import React, { useEffect, useRef, useState } from 'react';

const Projects = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with modern web technologies. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNjc3M0Q5Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNTAiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNzAiIHk9IjcwIiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjgwIiByeD0iNSIgZmlsbD0iI0Y3RkFGQyIvPgo8cmVjdCB4PSI3MCIgeT0iMTYwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzQ5N0JGRiIvPgo8cmVjdCB4PSIyMTAiIHk9IjE2MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIzMCIgcng9IjUiIGZpbGw9IiNFQ0YzRkYiLz4KPHN2Zz4K",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing daily tasks and projects. Includes drag-and-drop functionality, deadline tracking, and team collaboration features.",
      technologies: ["React", "Python", "MongoDB", "Express.js"],
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMTA5Q0Y1Ii8+CjxyZWN0IHg9IjUwIiB5PSI0MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNzAiIHk9IjYwIiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI0VGRjZGRiIvPgo8cmVjdCB4PSI3MCIgeT0iOTAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMjAiIHJ4PSIzIiBmaWxsPSIjRUZGNkZGIi8+CjxyZWN0IHg9IjcwIiB5PSIxMjAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMjAiIHJ4PSIzIiBmaWxsPSIjRUZGNkZGIi8+CjxyZWN0IHg9IjcwIiB5PSIxNTAiIHdpZHRoPSIyNjAiIGhlaWdodD0iMjAiIHJ4PSIzIiBmaWxsPSIjRUZGNkZGIi8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iNzAiIHI9IjUiIGZpbGw9IiMxMDk5N0YiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSIxMDAiIHI9IjUiIGZpbGw9IiNGNTk0MTUiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSIxMzAiIHI9IjUiIGZpbGw9IiMxMDk5N0YiLz4KPHN2Zz4K",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather application that provides real-time weather data, forecasts, and location-based services with a clean, intuitive interface.",
      technologies: ["JavaScript", "CSS", "HTML", "API Integration"],
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDhBREZGIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0ZGRkYwMyIvPgo8ZWxsaXBzZSBjeD0iMjAwIiBjeT0iMTQwIiByeD0iNDAiIHJ5PSIyNSIgZmlsbD0id2hpdGUiLz4KPGVsbGlwc2UgY3g9IjI1MCIgY3k9IjEyMCIgcng9IjM1IiByeT0iMjAiIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIGN4PSIzMDAiIGN5PSIxNjAiIHJ4PSI0NSIgcnk9IjI4IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxOTUiIHk9IjE3MCIgd2lkdGg9IjMiIGhlaWdodD0iMjAiIGZpbGw9IiM2OUQ2RjciLz4KPHJlY3QgeD0iMjA1IiB5PSIxNzAiIHdpZHRoPSIzIiBoZWlnaHQ9IjIwIiBmaWxsPSIjNjlENkY3Ii8+CjxyZWN0IHg9IjIxNSIgeT0iMTcwIiB3aWR0aD0iMyIgaGVpZ2h0PSIyMCIgZmlsbD0iIzY5RDZGNyIvPgo8dGV4dCB4PSI1MCIgeT0iMjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+MjVCwrBDPC90ZXh0Pgo8L3N2Zz4K",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "completed"
    },
    {
      id: 4,
      title: "Personal Blog Platform",
      description: "A custom blog platform with content management system, user authentication, comment system, and SEO optimization. Built with modern web standards.",
      technologies: ["Python", "Django", "PostgreSQL", "CSS"],
      category: "backend",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNzk1NEE2Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNjAiIHk9IjYwIiB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iI0Y5RkFGQiIvPgo8cmVjdCB4PSI2MCIgeT0iMTAwIiB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI0Y5RkFGQiIvPgo8cmVjdCB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI0Y5RkFGQiIvPgo8cmVjdCB4PSI2MCIgeT0iMTYwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI0Y5RkFGQiIvPgo8cmVjdCB4PSI2MCIgeT0iMTkwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE1IiByeD0iNSIgZmlsbD0iIzc5NTRBNiIvPgo8L3N2Zz4K",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and visualization with real-time charts, filtering capabilities, and export functionality.",
      technologies: ["Python", "Pandas", "JavaScript", "D3.js"],
      category: "data",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMUYyOTM3Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNTAiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI4MCIgeT0iMTcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMzQjgyRjYiLz4KPHJlY3QgeD0iMTIwIiB5PSIxNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzEwOThGNCIvPgo8cmVjdCB4PSIxNjAiIHk9IjEyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjMDZCNkQ0Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMTAwIiB3aWR0aD0iMjAiIGhlaWdodD0iOTAiIGZpbGw9IiMxMDk5N0YiLz4KPHJlY3QgeD0iMjQwIiB5PSI4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjExMCIgZmlsbD0iI0Y1OTQxNSIvPgo8cmVjdCB4PSIyODAiIHk9IjEyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjRUY0NDQ0Ii8+CjxsaW5lIHgxPSI3MCIgeTE9IjIwMCIgeDI9IjMzMCIgeTI9IjIwMCIgc3Ryb2tlPSIjOUI5Q0EzIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjcwIiB5MT0iNzAiIHgyPSI3MCIgeTI9IjIwMCIgc3Ryb2tlPSIjOUI5Q0EzIiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "planned"
    },
    {
      id: 6,
      title: "Mobile-First Portfolio",
      description: "A responsive portfolio website with mobile-first design approach, optimized performance, and modern UI/UX principles.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "web",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRkY2MzlCIi8+CjxyZWN0IHg9IjE1MCIgeT0iNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTcwIiByeD0iMTUiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE2MCIgeT0iNjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgcng9IjUiIGZpbGw9IiNGOUZBRkIiLz4KPHJlY3QgeD0iMTYwIiB5PSIxMzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNSIgcng9IjMiIGZpbGw9IiNGOUZBRkIiLz4KPHJlY3QgeD0iMTYwIiB5PSIxNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNSIgcng9IjMiIGZpbGw9IiNGOUZBRkIiLz4KPHJlY3QgeD0iMTYwIiB5PSIxNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNSIgcng9IjMiIGZpbGw9IiNGOUZBRkIiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTk1IiByPSI4IiBmaWxsPSIjRkY2MzlCIi8+CjwvZz4KPC9zdmc+Cg==",
      demoUrl: "#demo",
      codeUrl: "#code",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'data', label: 'Data Science', count: projects.filter(p => p.category === 'data').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return darkMode ? 'text-green-400 bg-green-900/20' : 'text-green-600 bg-green-100';
      case 'in-progress':
        return darkMode ? 'text-yellow-400 bg-yellow-900/20' : 'text-yellow-600 bg-yellow-100';
      case 'planned':
        return darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-100';
      default:
        return darkMode ? 'text-gray-400 bg-gray-700' : 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <section 
      id="projects" 
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
            My <span className={`${
              darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>Projects</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}></div>
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
            Here are some of the projects I've worked on. Each project represents a learning journey and demonstrates different aspects of my development skills.
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${
          isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 shadow-md'
              }`}
            >
              {category.label} <span className="ml-1">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${
                darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                isVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : 'opacity-0'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  getStatusColor(project.status)
                }`}>
                  {getStatusLabel(project.status)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } group-hover:text-blue-600 transition-colors duration-200`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode 
                          ? 'bg-blue-900/30 text-blue-400' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className={`flex-1 py-2 px-4 text-center text-sm font-semibold rounded-lg transition-all duration-200 ${
                      darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    } transform hover:scale-105`}
                    onClick={(e) => {
                      e.preventDefault();
                      // In a real implementation, these would be actual URLs
                      alert('Demo link would open here');
                    }}
                  >
                    <svg className="inline w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                  
                  <a
                    href={project.codeUrl}
                    className={`flex-1 py-2 px-4 text-center text-sm font-semibold rounded-lg border-2 transition-all duration-200 ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    } transform hover:scale-105`}
                    onClick={(e) => {
                      e.preventDefault();
                      // In a real implementation, these would be actual GitHub URLs
                      alert('GitHub repository would open here');
                    }}
                  >
                    <svg className="inline w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fade-in-up animation-delay-1200' : 'opacity-0'
        }`}>
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interested in Working Together?
            </h3>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;