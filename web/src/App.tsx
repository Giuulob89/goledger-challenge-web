import React from 'react';

import './styles/global.css';
import './styles/pages/principal-page.css';
import logoImg from '../src/assets/Design sem nome.png';
import clefImg from '../src/assets/g-clef.png';
import userImg from '../src/assets/user.png';
import lupaImg from '../src/assets/lupa (1).png';
import guitarplayerImg from '../src/assets/Captura_de_tela_de_2021-04-04_17-08-43-removebg-preview.png';
import drumsImg from '../src/assets/Captura_de_tela_de_2021-04-04_17-17-41-removebg-preview.png';
import tromboneImg from '../src/assets/Captura_de_tela_de_2021-04-04_17-27-15-removebg-preview.png';
import trumpetImg from '../src/assets/Captura_de_tela_de_2021-04-04_17-37-50-removebg-preview.png';
import pianoImg from '../src/assets/Captura_de_tela_de_2021-04-04_17-41-29-removebg-preview.png';
import brandAImg from '../src/assets/Marca A@2x.png';
import brandBImg from '../src/assets/Marca B@2x.png';
import brandCImg from '../src/assets/Marca C@2x.png';
import brandDImg from '../src/assets/Marca D@2x.png';
import guitarImg from '../src/assets/Card-removebg-preview.png';
import instagramImg from '../src/assets/instagram.png';
import facebookimg from '../src/assets/facebook.png';

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
              <img src={lupaImg} alt="Search" />
            </div>
            <div className="options">
              <p>Categories</p>
              <p>Brands</p>
              <button>Sell</button>
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
      <div className="page-style">
        <div className="trombone">
          <img src={tromboneImg} alt="trombone" />
        </div>
        <div className="drums">
          <img src={drumsImg} alt="drums" />
        </div>
        <div className="guitar-player">
          <img src={guitarplayerImg} alt="guitar player" />
        </div>
        <div className="piano">
          <img src={pianoImg} alt="piano" />
        </div>
        <div className="trumpet">
          <img src={trumpetImg} alt="trumpet" />
        </div>
      </div>
      <div className="brands">
        <h2>Brands</h2>
        <div className="each-brand">
          <div className="brandA">
            <img src={brandAImg} alt="Brand A" />
          </div>
          <div className="brandB">
            <img src={brandBImg} alt="Brand B" />
          </div>
          <div className="brandC">
            <img src={brandCImg} alt="Brand C" />
          </div>
          <div className="brandD">
            <img src={brandDImg} alt="Brand D" />
          </div>
        </div>
      </div>
      <div className="all-products">
        <h2>All the products</h2>
        <div className="cards">
          <div className="card">
            <div className="card-content">
              <div className="product-image">
                <img src={guitarImg} alt="Electroacoustic guitar" />
              </div>
              <div className="division-bar"></div>
              <div className="product-name">
                <p>Electroacoustic guitar</p>
              </div>
              <div className="product-brand">
                <p>Brand A</p>
              </div>
              <div className="product-clefcoins">
                <img src={clefImg} alt="clefcoin" />
                <p>100 clefcoins</p>
              </div>
              <button>Buy it</button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="product-image">
                <img src={guitarImg} alt="Electroacoustic guitar" />
              </div>
              <div className="division-bar"></div>
              <div className="product-name">
                <p>Electroacoustic guitar</p>
              </div>
              <div className="product-brand">
                <p>Brand A</p>
              </div>
              <div className="product-clefcoins">
                <img src={clefImg} alt="clefcoin" />
                <p>100 clefcoins</p>
              </div>
              <button>Buy it</button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="product-image">
                <img src={guitarImg} alt="Electroacoustic guitar" />
              </div>
              <div className="division-bar"></div>
              <div className="product-name">
                <p>Electroacoustic guitar</p>
              </div>
              <div className="product-brand">
                <p>Brand A</p>
              </div>
              <div className="product-clefcoins">
                <img src={clefImg} alt="clefcoin" />
                <p>100 clefcoins</p>
              </div>
              <button>Buy it</button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="product-image">
                <img src={guitarImg} alt="Electroacoustic guitar" />
              </div>
              <div className="division-bar"></div>
              <div className="product-name">
                <p>Electroacoustic guitar</p>
              </div>
              <div className="product-brand">
                <p>Brand A</p>
              </div>
              <div className="product-clefcoins">
                <img src={clefImg} alt="clefcoin" />
                <p>100 clefcoins</p>
              </div>
              <button>Buy it</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="division-bar"></div>
        <div className="social-media">
          <div className="instagram">
            <img src={instagramImg} alt="instagram" />
          </div>
          <div className="facebook">
            <img src={facebookimg} alt="facebook" />
          </div>
        </div>
        <div className="site-name">
          <div className="mind-your-own-music">
            <p>Mind your own music</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
