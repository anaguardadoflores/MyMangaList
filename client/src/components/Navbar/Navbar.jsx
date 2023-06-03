import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from './../../contexts/auth.context';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className='Navbar'>
            <ul>
                <li><Link to="/" className='title'>MyMangaList</Link></li>
                <li><Link to="/">Home</Link></li>
                {
                    user
                        ?
                        <>
                            <li><Link to="/List">List</Link></li>
                            <li><Link as="span" onClick={logout} to={'/'}>Log Out</Link></li>
                            <Link to="/Profile" className='colorUser'>Hello, {user.username}!</Link>
                            <li className="profile-link"><Link to="/Profile">Profile</Link></li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/Signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/Login">Log In</Link>
                            </li>
                        </>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
