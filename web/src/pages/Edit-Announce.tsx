import { Link } from 'react-router-dom';

import '../styles/pages/navbar-footer.css';
import '../styles/pages/new-announce.css';
import logoImg from '../assets/Design sem nome.png';
import clefImg from '../assets/g-clef.png';
import userImg from '../assets/user.png';
import lupaImg from '../assets/lupa (1).png';
import saxguyImg from '../assets/Tocador de saxofone.png';
import instagramImg from '../assets/instagram.png';
import facebookimg from '../assets/facebook.png';

function EditAnnounce() {
    return (
        <div id="new-announce">
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
            <div className="product-register">
                <div className="image">
                    <img src={saxguyImg} alt="Saxofone player" />
                </div>
                <div className="forms">
                    <div className="forms-title">
                        <h1>Edit your product</h1>
                    </div>
                    <div className="forms-content">
                        <div className="insert-img">
                            <p>+</p>
                            <p>Change Image</p>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <label>Product Name</label>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <label>Announce Date</label>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <label>Clefcoins Price</label>
                                <input type="text" />
                            </div>
                        </div>
                        <button>Edit</button>
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

export default EditAnnounce;