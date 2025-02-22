// src/components/Header.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png'; // Assurez-vous que le chemin est correct
import '../styles/header.css'; // Créez ce fichier pour vos styles spécifiques au Header

const Header = () => {
  return (
    <>
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='signInDiv'>
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Header;
