import { Link } from 'react-router-dom';
import Header from './header-img.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Header} className="header-img" alt="logo" />
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;