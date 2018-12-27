import { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';

import Logo       from './Logo';
import SignUpForm from './SignUpForm';

const Home = () =>
    <Fragment>
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
        <div className="home-container">
            <div className="home-copy">
                <h1>
                    Track and visualize<br />
                    your climbing progress
                </h1>
                <p>
                    SendIt is an online climbing journal and progress tracker.<br />
                    Log your climbs, see your stats, and level up your training.
                </p>
                <img src="../src/assets/images/homepage.svg"/>
            </div>
            <SignUpForm />
        </div>
    </Fragment>
;

export default Home;