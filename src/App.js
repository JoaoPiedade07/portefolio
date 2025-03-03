import './App.css';
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptop, FaArrowRight } from 'react-icons/fa';

function App() {
  const [selectedSection, setSelectedSection] = useState('projects');

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [ text ] = useTypewriter({
    words: [ 'Software Developer', 'FronEnd Developer', 'BackEnd Developer' ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const languages = [
    { id: 1, name: 'JavaScript', image: '/imagens/javascript.svg' },
    { id: 2, name: 'Python', image: '/imagens/python.svg' },
    { id: 3, name: 'Java', image: '/imagens/java.svg' },
    { id: 4, name: 'Kotlin', image: '/imagens/kotlin.svg' },
    { id: 5, name: 'React', image: '/logo192.png' }
  ];

  const projects = [
    { id: 1, name: 'JapaoNaMesa', description: 'A japanese cuisine app built in Java using Android Studio.', image: '/imagens/japanese_cuisine.webp', link: 'https://github.com/JoaoPiedade07/JapaoNaMesa2' },
    { id: 2, name: 'Book Store', description: 'A book store using Kotlin and Firebase.', image: '/imagens/bookstore.avif', link: 'https://github.com/JoaoPiedade07/BookStoreJPGM' },
    { id: 3, name: 'App Events', description: 'Built using React Expo, an app to see events and create them.', image: '/imagens/events_app.png', link: 'https://github.com/JoaoPiedade07/JapaoNaMesa2' },
    { id: 4, name: 'To-do List', description: 'A to-do list using HTML, CSS and JavaScript with SQLite as database.', image: '/imagens/to_do_list.png', link: 'https://github.com/JoaoPiedade07/BookStoreJPGM' },
  ];

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`main-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>
          I'm a <span>{text}</span>
          <span style={{ color: 'black' }}>
            <Cursor cursorStyle="_" />
          </span>
        </h1>
        <p style={{ fontSize: 18, marginLeft: '20px', marginTop: '10px ' }}>
          Hello everyone, my name is João Piedade. I am a software engineer student. Over the years,<br /> I've developed many projects, and a deep passion for coding.
        </p>
      </div>

      <div className="profile-container">
        <img src="/imagens/profile.jpg" alt="Imagem de Perfil" className="profile-img" />
        <h2 className="profile-name">Joao Piedade</h2>
        <p className="profile-tag">@JoaoPiedade07</p>
        <div className="social-icons">
          <a href="https://github.com/JoaoPiedade07" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-piedade-6a5480321/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:joaoluislopespiedade07@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <div className="switch-container">
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
      </div>

      {/* Switch de Modo Claro/Escuro */}
      

      <h2>Portfolio Showcasee:</h2>
      <p>Explore my journey through projects and technical expertise. Each section represents a <br />milestone in my continuous learning path.</p>

      <div className="toggle-container">
        <div className="toggle-buttons">
          <button className={selectedSection === 'projects' ? 'active' : ''} onClick={() => setSelectedSection('projects')}>
            <FaCode className="section-icon" />
            <span>Projects</span>
          </button>
          <button className={selectedSection === 'languages' ? 'active' : ''} onClick={() => setSelectedSection('languages')}>
            <FaLaptop className="section-icon" />
            <span>Languages</span>
          </button>
        </div>
      </div>

      <motion.div className="section-container" initial="hidden" animate="visible" variants={sectionVariants}>
        {selectedSection === 'projects' && (
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div key={project.id} className="project-card" variants={sectionVariants}>
                <img src={project.image} alt={project.name} className="project-image" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="details-button">
                  Details <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {selectedSection === 'languages' && (
          <div className="languages-grid">
            {languages.map((language) => (
              <motion.div key={language.id} className="language-card" variants={sectionVariants}>
                <img src={language.image} alt={language.name} className="language-icon" />
                <h3>{language.name}</h3>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;