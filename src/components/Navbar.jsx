import { NavLink } from 'react-router-dom';

import Logo from './Logo';

const Navbar = () =>
    <div className="home-navbar">
        <div className="logo">
            <Logo />
        </div>
        <div className="links">
            <NavLink to="features">Features</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="login">Sign in</NavLink>
            <NavLink to="register" className="btn btn-red-inverse">Sign up</NavLink>
        </div>
    </div>
;

export default Navbar;