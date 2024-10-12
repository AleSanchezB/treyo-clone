import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="https://trello.com/images/trello-logo-blue.svg" alt="Trello Logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>Tableros</li>
            <li>Plantillas</li>
            <li>Inicio</li>
          </ul>
          <div className="workspace">
            <p>Espacios de trabajo</p>
            <div className="workspace-item">
              <span className="workspace-icon">Y</span>
              <span className="workspace-name">Yucatecos</span>
            </div>
            <ul className="workspace-menu">
              <li>Tableros</li>
              <li>Lo más destacado</li>
              <li>Vistas</li>
              <li>Miembros</li>
              <li>Configuración</li>
            </ul>
          </div>
        </nav>
        <div className="sidebar-premium">
          <p>Prueba Trello Premium</p>
          <button>Comenzar prueba gratis</button>
        </div>
      </aside>

      <main className="main-content">
        <div className="workspace-header">
          <h2>Yucatecos</h2>
          <p>Proyecto de Ingeniería en Software</p>
        </div>
        <div className="board-section">
          <p>Los tableros son el lugar en el que se hace el trabajo en Trello. En un tablero, se pueden mover las tarjetas de una lista a otra para llevar un seguimiento de proyectos, tareas y demás actividades.</p>
          <button className="create-board-btn">Crea tu primer tablero</button>
        </div>
        <div className="illustration">
          {/* Puedes agregar aquí alguna ilustración */}
        </div>
      </main>
    </div>
  );
};

export default Home;
