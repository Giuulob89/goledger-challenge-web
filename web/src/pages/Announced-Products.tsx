import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/navbar-footer.css';
import '../styles/pages/announced-products.css';
import logoImg from '../assets/Design sem nome.png';
import clefImg from '../assets/g-clef.png';
import userImg from '../assets/user.png';
import lupaImg from '../assets/lupa (1).png';
import guitarImg from '../assets/Card-removebg-preview.png';
import pencilImg from '../assets/edit.png';
import trashImg from '../assets/delete.png';
import instagramImg from '../assets/instagram.png';
import facebookimg from '../assets/facebook.png';

function AnnouncedProducts() {
  return (
    <div id="announced-products">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <Link to = "./Principal-Page"><img src={logoImg} alt="Mind your own Music" /></Link>
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
      <div className="page-title">
        <h2>Here is your anounced products list!</h2>
      </div>
      <div className="anounced-products-list">
        <div className="list-content">
          <Link to = "./New-announce"><button>Announce a new product</button></Link>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <div className="product-image">
                  <img src={guitarImg} alt="Electroacustic guitar" />
                </div>
                <div className="product-informations">
                  <div className="product-name">
                    <p>Electroacustic guitar</p>
                  </div>
                  <div className="product-date">
                    <div className="announced">
                      <p>Announced on: </p>
                    </div>
                    <div className="date">
                      <p>03/04/2021</p>
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="price-description">
                      <p>Preço: </p>
                    </div>
                    <img src={clefImg} alt="clefcoin" />
                    <div className="price">
                      <p>100,00</p>
                    </div>
                  </div>
                </div>
                <div className="product-status">
                  <p>Awaiting buyer</p>
                </div>
                <div className="edit-exclude">
                  <div className="edit">
                    <Link to = "./Edit-Announce"><img src={pencilImg} alt="Edit" /></Link>
                  </div>
                  <div className="exclude">
                    <img src={trashImg} alt="Exclude" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="product-image">
                  <img src={guitarImg} alt="Electroacustic guitar" />
                </div>
                <div className="product-informations">
                  <div className="product-name">
                    <p>Electroacustic guitar</p>
                  </div>
                  <div className="product-date">
                    <div className="announced">
                      <p>Announced on: </p>
                    </div>
                    <div className="date">
                      <p>03/04/2021</p>
                    </div>
                  </div>
                  <div className="product-price">
                    <div className="price-description">
                      <p>Preço: </p>
                    </div>
                    <img src={clefImg} alt="clefcoin" />
                    <div className="price">
                      <p>100,00</p>
                    </div>
                  </div>
                </div>
                <div className="product-status">
                  <p>Awaiting buyer</p>
                </div>
                <div className="edit-exclude">
                  <div className="edit">
                  <Link to = "./Edit-Announce"><img src={pencilImg} alt="Edit" /></Link>
                  </div>
                  <div className="exclude">
                    <img src={trashImg} alt="Exclude" />
                  </div>
                </div>
              </div>
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

export default AnnouncedProducts;