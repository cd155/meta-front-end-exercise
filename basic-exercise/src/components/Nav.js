import {Link} from 'react-router-dom'
import './Components.css';

function Nav() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-item" > MealsProvider </Link>
      <Link to="/modeToggle" className="main-nav-item" > ModeToggle </Link>
      <Link to="/promo" className="main-nav-item" > Promo </Link>
      <Link to="/button" className="main-nav-item" > Button </Link>
      <Link to="/logo" className="main-nav-item" > Logo </Link>
      <Link to="/video" className="main-nav-item" > Video </Link>
    </nav>
  );
};

export default Nav;