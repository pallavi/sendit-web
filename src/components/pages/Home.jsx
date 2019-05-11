import { Fragment } from 'react';

import Navbar     from '../Navbar';
import SignUpForm from '../SignUpForm';

const Home = () =>
    <Fragment>
        <Navbar />
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