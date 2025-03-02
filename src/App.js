import './App.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function App() {

  const [ text ] = useTypewriter({
    words: [ 'Developer' ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const images = [
    {id: 1, src: '/logo192.png', alt: 'React'},
    {id: 2, src: '/imagens/javascript.svg', alt: 'JavaScript'},
    {id: 3, src: '/imagens/python.svg', alt: 'Python'},
    {id: 4, src: '/imagens/java.svg', alt: 'Java'},
    {id: 4, src: '/imagens/kotlin.svg', alt: 'Kotlin'},
  ]

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

      <div className="container">
        <h2> Programing Languages </h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {images.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} style={{ width: '60px', borderRadius: '8px' }} />
          ))}
    </div>
    </div>
    </div>
  );
}

export default App;
