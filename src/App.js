import './App.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptop, FaArrowRight } from 'react-icons/fa';


function App() {

  const [ text ] = useTypewriter({
    words: [ 'Developer' ],
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
    {
      id: 1,
      name: 'JapaoNaMesa',
      description: 'A japanese cuisine app build in Java using Android Studio.',
      image: '/imagens/japanese_cuisine.webp',
      link: 'https://github.com/JoaoPiedade07/JapaoNaMesa2'
    },
    {
      id: 2,
      name: 'Book Store',
      description: 'An book store using Kotlin and Firebase.',
      image: '/imagens/bookstore.avif',
      link: 'https://github.com/JoaoPiedade07/BookStoreJPGM'
    },
    {
      id: 2,
      name: 'App Events',
      description: 'Buildt using React expo, an app to see events and create.',
      image: '/imagens/events_app.png',
      link: 'https://github.com/JoaoPiedade07/JapaoNaMesa2'
    },
    {
      id: 4,
      name: 'To-do List',
      description: 'An to-do list using Html, Css and JavaScript with Sqllite as database.',
      image: '/imagens/to_do_list.png',
      link: 'https://github.com/JoaoPiedade07/BookStoreJPGM'
    }
  ];

  return (
    <div className = "main-container">
      <div className = "header-container">
        <h1 style = {{ textAlign: 'left', marginLeft: '20px' }}>
          I'm a {' '}
          <span> { text } </span>
          <span style = {{ color: 'black' }}>
          <Cursor cursorStyle = '_'/>
          </span>
        </h1>
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
      </div>

      <h2> Portfolio Showcase: </h2>
      <p>Explore my journey throught projects and techinical expertise. Each section represents a milestone in my continous learning path.</p>

      <div className="section-container">
      <div className="projects">
          <FaCode className="section-icon" /> 
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((projects) => (
              <div key={projects.id} className="project-card">
                <img src={projects.image} alt={projects.name} className="project-image" />
                <h3>{projects.name}</h3>
                <p>{projects.description}</p>
                <a href={projects.link} target="_blank" rel="noopener noreferrer" className="details-button">
                  Details <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="languages">
          <FaLaptop className="section-icon" />
          <h2>Languages</h2>
          <div className="languages-grid">
            {languages.map((languages) => (
              <div key={languages.id} className="language-card">
              <img src={languages.image} alt={languages.name} className="language-icon" />
              <h3>{languages.name}</h3>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
