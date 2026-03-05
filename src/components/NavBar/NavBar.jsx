import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="/">
                        <img src="./src/img/logo fondo blanco.png" alt="Logo" />
                    </a>
                </div>

                <ul className="navbar-links">
                    <li><a href="#frontend">Frontend</a></li>
                    <li><a href="#backend">Backend</a></li>
                    <li><a href="#data">Data Science</a></li>
                    <li><a href="#devops">DevOps</a></li>
                </ul>

                <div className="navbar-cart">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
