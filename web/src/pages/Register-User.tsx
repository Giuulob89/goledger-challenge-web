import { Link } from 'react-router-dom';

import '../styles/pages/navbar-footer.css';
import '../styles/pages/new-announce.css';
import '../styles/pages/register-user.css';
import logoImg from '../assets/Design sem nome.png';
import keytarImg from '../assets/Tocador de keytar.png';
import instagramImg from '../assets/instagram.png';
import facebookimg from '../assets/facebook.png';

function RegisterUser() {
    return (
        <div id="register-user">
            <div className="product-register">
                <div className="image">
                    <img src={keytarImg} alt="Keytar player" />
                </div>
                <div className="forms">
                    <div className="introduction">
                        <img src={logoImg} alt="logo" />
                        <h3>Mind your own music</h3>
                    </div>
                    <div className="title-forms">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="forms-content">
                        <div className="inputs">
                            <div className="input">
                                <label>Name</label>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <label>E-mail</label>
                                <input type="text" />
                            </div>
                            <div className="inputs1">
                                <div className="input1">
                                    <label>Password</label>
                                    <input type="text" />
                                </div>
                                <div className="input1">
                                    <label>Confirm Password</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <button><Link to = "./Login" className = "link-to"><p>Register</p></Link></button>
                        <div className="to-login">
                            <Link to = "./Login"><p>I already have an account</p></Link>
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

export default RegisterUser;