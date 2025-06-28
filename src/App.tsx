import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, Terminal, GitBranch, Database, Menu, X } from 'lucide-react';
import profileImage from './profile.jpg';
import profile from './profile2.jpeg';
import enhance from './enhance.webp'
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Header */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 animate-slide-down">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#about" className="text-xl font-bold text-cyan-400 hover:scale-110 transition-transform">AM</a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5">About</a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5">Projects</a>
              <a href="#education" className="text-gray-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5">Educaton</a>

              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4 transition-all duration-300`}
            style={{ 
              transform: isMenuOpen ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              opacity: isMenuOpen ? 1 : 0
            }}
          >
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Education</a>
               <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced animations */}
      <header className="container mx-auto px-6 pt-24 pb-16 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Hi, I'm <span className="text-cyan-400">Arijit Malik</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-right animate-delay-200">
            Software Engineer specializing in scalable applications and clean code
          </p>
          <div className="flex space-x-4 animate-fade-in animate-delay-400">
            <a 
              href="https://github.com/arijit469" 
              className="p-2 hover:text-cyan-400 transition-all hover:-translate-y-1" 
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arijit-malik-776224232/" 
              className="p-2 hover:text-cyan-400 transition-all hover:-translate-y-1" 
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:Arijitmalik469@gmail.com" 
              className="p-2 hover:text-cyan-400 transition-all hover:-translate-y-1" 
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section with reveal animations */}
      <section id="about" className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 reveal reveal-left">
            <img
  src={profileImage}
  alt="Arijit Malik - Software Engineer"
  className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
/>
              {/* Additional Photos Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=400"
                  alt="Coding session"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                 <img
                   src={profile}
                        alt="Arijit Malik - MEEE!!!!!!"
                         className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400"
                  alt="Speaking at tech conference"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2 reveal reveal-right">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Terminal className="text-cyan-400" /> About Me
              </h2>
              <p className="text-gray-300 mb-6">
              Hello! I'm Arijit Malik, a passionate MCA student with a keen interest in software development and emerging technologies.
              My journey in computer science has equipped me with a strong foundation in various programming languages and frameworks.
              </p>
              <p className="text-gray-300">
              love tackling complex problems and turning ideas into reality through code. When I'm not coding, you can find me
            exploring new technologies, contributing to open-source projects, or enjoying a good book on tech innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with scale reveal */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center reveal reveal-up">
            <Code className="text-cyan-400" /> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg reveal reveal-scale animate-delay-100 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-cyan-400" /> Languages
              </h3>
              <ul className="space-y-2">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>c++</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg reveal reveal-scale animate-delay-300 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-cyan-400" /> Technologies
              </h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg reveal reveal-scale animate-delay-500 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="text-cyan-400" /> DevOps & Tools
              </h3>
              <ul className="space-y-2">
                <li>Git/GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with reveal animations */}
      <section id="projects" className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center reveal reveal-up">
            <Briefcase className="text-cyan-400" /> Technical Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multiservice website',
                description: 'Designed and implemented a scalable multiserviceservices website using Node.js, react.js mongodb,express',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400'
              },
              {
                title: 'Real-time face recognition in log light',
                description: 'Built a high-performance analytics system processing millions of events.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400'
              },
              {
                title: 'Doctor appointment booking system',
                description: 'Developed infrastructure as code solutions using , Mysql',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400'
              },
              {
                title: 'Image enhancement using hybrid method',
                description: 'Built a high-performance  system for backlit images using, AI,ML,MATLAB',
                   src={enhance}
            ].map((project, index) => (
              <div 
                key={project.title} 
                className={`bg-gray-900 rounded-lg overflow-hidden reveal reveal-up hover:transform hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-cyan-400 flex items-center gap-1 hover:underline">
                      View Project <ExternalLink size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Education Section */}
      <section id="education" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center reveal reveal-up">
            <User className="text-cyan-400" /> Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                degree: 'Master of Computer Applications',
                institution: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
                year: '2023 - 2025',
                description: 'Focused on advanced backlit image and face recognitin ',
              },
              {
                degree: 'Bachelor of Computer Application',
                institution: 'Vivekananda Mahavidyalaya, Haripal, Hooghly',
                year: '2020 - 2023',
                description: 'Specialized in foundation  .',
              },
              {
                degree: 'High School ',
                institution: ' Akuni B.G. Biharilal Institution',
                year: '2016 - 2018',
                description: 'Majored Computer Application.',
              },
            ].map((edu, index) => (
              <div
                key={edu.degree}
                className="bg-gray-800/50 p-6 rounded-lg reveal reveal-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold mb-4">{edu.degree}</h3>
                <p className="text-cyan-400">{edu.institution}</p>
                <p className="text-gray-300">{edu.year}</p>
                <p className="mt-2 text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Footer with fade-in animation */}
      <footer id="contact" className="bg-gray-900 py-8 reveal reveal-up">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p> Email : arijitmalik469@gmail.com</p>
          <p> phone :+91 8327573101</p>
        
          <p>© 2024 Arijit Malik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
