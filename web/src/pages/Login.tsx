import { Link } from 'react-router-dom';

import '../styles/pages/navbar-footer.css';
import '../styles/pages/new-announce.css';
import '../styles/pages/register-user.css';
import '../styles/pages/login.css';
import logoImg from '../assets/Design sem nome.png';
import singerImg from '../assets/Cantora@2x.png';
import instagramImg from '../assets/instagram.png';
import facebookimg from '../assets/facebook.png';

function Login() {
    return (
        <div id="login">
            <div className="product-register">
                <div className="image">
                    <img src={singerImg} alt="Singer" />
                </div>
                <div className="forms">
                    <div className="introduction">
                        <img src={logoImg} alt="logo" />
                        <h3>Mind your own music</h3>
                    </div>
                    <div className="title-forms">
                        <h1>Sign In</h1>
                    </div>
                    <div className="forms-content">
                        <div className="inputs">
                            <div className="input">
                                <label>E-mail</label>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <label>Password</label>
                                <input type="text" />
                            </div>
                        </div>
                        <button><Link to = "./Principal-Page" className = "link-to"><p>Login</p></Link></button>
                        <div className="to-login">
                            <Link to = "/"><p>I don't have an account yet</p></Link>
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

export default Login;