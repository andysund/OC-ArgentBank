import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Import du contexte
import logo from '../assets/argentBankLogo.png';
import '../styles/header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
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
        {user ? (
          <>
            {/* Affiche le nom de l’utilisateur */}
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </Link>
            {/* Lien de déconnexion */}
            <Link className="main-nav-item" to="/" onClick={logout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          /* Si pas connecté, on affiche Sign In */
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            <div className="signInText">Sign In</div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
