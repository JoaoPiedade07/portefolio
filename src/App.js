import './App.css';
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode, 
  FaLaptop, 
  FaArrowRight, 
  FaCoffee, 
  FaMobile, 
  FaAppStoreIos, 
  FaDatabase, 
  FaFolderOpen, 
  FaServer, 
  FaBookOpen, 
  FaNetworkWired, 
  FaTools, 
  FaUtensils 
} from 'react-icons/fa';

function App() {
  const [selectedSection, setSelectedSection] = useState('projects');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [text] = useTypewriter({
    words: ['Software Developer', 'Full-stack Web Developer', 'Database Management', 'Mobile Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const languages = [
    { id: 1, name: 'JavaScript', image: './imagens/javascript.svg' },
    { id: 2, name: 'Python', image: './imagens/python.svg' },
    { id: 3, name: 'Java', image: './imagens/java.svg' },
    { id: 4, name: 'Kotlin', image: './imagens/kotlin.svg' },
    { id: 5, name: 'React', image: './logo192.png' },
    { id: 6, name: 'PHP', image: './imagens/php.svg' },
    { id: 7, name: 'Typescript', image: './imagens/typescript.svg' },
    { id: 8, name: 'CSharp', image: './imagens/csharp.svg' },
  ];

  const tools = [
    { id: 1, name: 'Android Studio', image: './imagens/androidStudio.svg' },
    { id: 2, name: 'Intelija', image: './imagens/intelija.svg' },
    { id: 3, name: 'Figma', image: './imagens/figma.svg' },
    { id: 4, name: 'Magento', image: './imagens/magento.svg' },
    { id: 5, name: 'XCode', image: './imagens/xcode.svg' },
    { id: 6, name: 'Unity', image: './imagens/unity.svg' },
    { id: 7, name: 'Sqlite', image: './imagens/sqllite.svg' },
    { id: 8, name: 'Nodejs', image: './imagens/nodejs.svg' },
  ];

  const projects = [
    { id: 1, name: 'JapaoNaMesa', description: 'A japanese cuisine app built in Java using Android Studio.', image: './imagens/japanese_cuisine.webp', link: 'https://github.com/JoaoPiedade07/JapaoNaMesa2' },
    { id: 2, name: 'Book Store', description: 'A book store using Kotlin and Firebase.', image: './imagens/bookstore.avif', link: 'https://github.com/JoaoPiedade07/BookStoreJPGM' },
    { id: 3, name: 'App Events', description: 'Built using React Expo, an app to see events and create them.', image: './imagens/events_app.png', link: 'https://github.com/JoaoPiedade07/app-eventos' },
    { id: 4, name: 'To-do List', description: 'A to-do list using HTML, CSS and JavaScript with SQLite as database.', image: './imagens/to_do_list.png', link: 'https://github.com/JoaoPiedade07/to_do_list' },
    { id: 5, name: 'Projeto Centro de Saude', description: 'A Website using HTML, CSS and JavaScript of a health center', image: './imagens/health_center.png', link: 'https://github.com/JoaoPiedade07/Projeto_Centro_Saude' },
    { id: 6, name: 'GameBoy', description: 'A Gameboy using HTML, CSS and JavaScript, can play snake game and others', image: './imagens/gameboy2.png', link: 'https://github.com/JoaoPiedade07/GameBoy' },
    { id: 7, name: 'TodoApp', description: 'A todo app', image: './imagens/todoapp.png', link: 'https://github.com/JoaoPiedade07/TodoApp' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case 'projects':
        return (
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
        );
      
      case 'languages':
        return (
          <div className="languages-grid">
            {languages.map((language) => (
              <motion.div key={language.id} className="language-card" variants={sectionVariants}>
                <img src={language.image} alt={language.name} className="language-icon" />
                <h3>{language.name}</h3>
              </motion.div>
            ))}
          </div>
        );
      
      case 'tools':
        return (
          <div className="tools-grid">
            {tools.map((tool) => (
              <motion.div key={tool.id} className="tools-card" variants={sectionVariants}>
                <img src={tool.image} alt={tool.name} className="tools-icon" />
                <h3>{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`main-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Header Section */}
      <div className="header-container">
        <h1>
          I'm a <span>{text}</span>
          <span style={{ color: darkMode ? 'white' : 'black' }}>
            <Cursor cursorStyle="_" />
          </span>
        </h1>
        <p>
          Hello everyone, my name is João Piedade, I'm from Lisbon, Portugal. I am a software engineer student. Over the years, I've developed many projects, and a deep passion for coding.
        </p>
        <h4>Fun facts:</h4>
        <div className="funFact-grid">
          <div className="funFact-card">
            <p><FaCode className="icon"/>8 code languages learned</p>
          </div>
          <div className="funFact-card">
            <p><FaCoffee className="icon"/>Love coffe</p>
          </div>
          <div className="funFact-card">
            <p><FaFolderOpen className="icon"/>6 Complete Projects</p>
          </div>
          <div className="funFact-card">
            <p><FaUtensils className="icon"/>Love japanese cuisine</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-container">
        <img src="./profile.JPG" alt="Imagem de Perfil" className="profile-img" />
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

      {/* Experience Section */}
      <h2 style={{ margin: '20px 0' }}>My Experience:</h2>

      <div className="experiences-grid">
        <div className="experiences-card">
          <h3>
            <FaBookOpen className="icon" /> Programming Teacher 
            <span className="institution"> - Happy Code</span>
          </h3>
          <p style={{ marginTop: '17px' }}>
            I currently work as a programming teacher for young talents. It's a part-time job.
          </p>
        </div>

        <div className="experiences-card">
          <h3>
            <FaNetworkWired className="icon" /> IT Technician 
            <span className="institution"> - ISTEC - University Institute of Lisbon</span>
          </h3>
          <p style={{ marginTop: '17px' }}>
            Configuring a Content Management System (CMS) · Managing the content of a CMS · Configuring a XAMPP system · Modeling an information system · Developing forms in PHP          
          </p>
        </div>
      </div>

      {/* Services Section */}
      <h2 style={{ margin: '20px 0' }}>My Services:</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>
            <FaMobile className="icon" /> Mobile Application
          </h3>
          <p>
            With strong expertise in mobile programming, I master the three main languages in the field: React, Java, and Kotlin. My projects are complete and well-structured, demonstrating my ability to develop robust and functional applications, ensuring efficiency and innovation in every development.
          </p>
        </div>

        <div className="service-card">
          <h3><FaServer className="icon" /> Full-stack Developer</h3>
          <p>
            I have been studying Full Stack Web Development for four years, gaining solid knowledge in JavaScript, React, and Python, always combined with HTML and CSS to create complete and efficient web applications. My public projects showcase my ability to develop well-structured and functional solutions, both on the front-end and back-end, ensuring high performance and a great user experience.
          </p>
        </div>

        <div className="service-card">
          <h3><FaDatabase className="icon" /> Database Management</h3>
          <p>
            I have extensive experience with databases, having worked with various technologies such as MySQL, SQL Server, SQLite, Firebase, and MongoDB. All my large projects are structured with robust databases, ensuring efficiency and scalability. Additionally, I have worked at a company where my role was heavily focused on database management and optimization, further enhancing my skills in this area.
          </p>
        </div>

        <div className="service-card">
          <h3><FaAppStoreIos className="icon" /> API's</h3>
          <p>
            One of the things I enjoy most in development is connecting the front-end with the back-end, and using APIs for that is simply amazing. I am highly familiar with APIs and have used them in several large-scale projects, ensuring efficient and well-structured integrations to create dynamic and scalable applications.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <h2>Portfolio Showcase:</h2>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 20px' }}>
        Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path.
      </p>

      <div className="toggle-container">
        <div className="toggle-buttons">
          <button 
            className={selectedSection === 'projects' ? 'active' : ''} 
            onClick={() => setSelectedSection('projects')}
          >
            <FaCode className="section-icon" />
            <span>Projects</span>
          </button>
          <button 
            className={selectedSection === 'languages' ? 'active' : ''} 
            onClick={() => setSelectedSection('languages')}
          >
            <FaLaptop className="section-icon" />
            <span>Languages</span>
          </button>
          <button 
            className={selectedSection === 'tools' ? 'active' : ''} 
            onClick={() => setSelectedSection('tools')}
          >
            <FaTools className="section-icon" />
            <span>Tools</span>
          </button>
        </div>
      </div>

      {/* Dynamic Section Content */}
      <motion.div 
        className="section-container" 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariants}
        key={selectedSection}
      >
        {renderSelectedSection()}
      </motion.div>
    </div>
  );
}

export default App;