import React from 'react';

import './styles/global.css';
import './styles/pages/principal-page.css';
import logoImg from '../src/assets/Design sem nome.png';
import clefImg from '../src/assets/g-clef.png';
import userImg from '../src/assets/user.png';
import lupaImg from '../src/assets/lupa (1).png';

function App() {
  return (
    <div id="principal-page">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src={logoImg} alt="Mind your own Music" />
          </div>
          <div className="bar-options">
            <div className="search-bar">
              <input type="text" />
              <img src={lupaImg} alt="Search"/>
            </div>
            <div className="options">
              <p>Categorias</p>
              <p>Marcas</p>
              <button>Vender</button>
            </div>
          </div>
          <div className="profile">
            <div className="profile-informations">
              <div className="profile-name">
                <p>Fulano de Tal Oliveira</p>
              </div>
              <div className="clefcoins">
                <img src={clefImg} alt="clefcoin" />
                <p>100 clefcoins</p>
              </div>
            </div>
            <div className="profile-image">
              <img src={userImg} alt="usuário" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
