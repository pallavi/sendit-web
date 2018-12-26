import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

const SendIt = ({ children, location, handleSignOut, toggleMenu, showMenu }) => {
    let header = location.pathname.split('/')[1] || 'overview';
    header = header.replace(/-/g, ' ').replace(/\w\S*/g, (str) => `${str.charAt(0).toUpperCase()}${str.substr(1).toLowerCase()}`);

    return (
        <div className="sendit">
            <div className={`main-menu ${showMenu ? 'show' : undefined}`}>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="items-container">
                    <NavLink
                        onClick={showMenu ? toggleMenu : undefined}
                        to="record-a-climb"
                        className='btn btn-dark btn-medium'
                        activeClassName='selected'
                        isActive={(match, location) => location.pathname === '/record-a-climb'}>
                        <div>
                            <i className="fas fa-plus"></i>
                            <span>Record a Climb</span>
                        </div>
                    </NavLink>
                    <div className="menu-items">
                        <h4>Stats</h4>
                        <NavLink
                            onClick={showMenu ? toggleMenu : undefined}
                            to="/"
                            activeClassName='selected'
                            isActive={(match, location) => location.pathname === '/'}>
                            <i className="fas fa-chart-area"></i>
                            <span>Overview</span>
                        </NavLink>
                        <NavLink
                            onClick={showMenu ? toggleMenu : undefined}
                            to="session-log" 
                            activeClassName='selected'
                            isActive={(match, location) => location.pathname.startsWith('/session-log')}>
                            <i className="fas fa-book"></i>
                            <span>Session Log</span>
                        </NavLink>
                        <NavLink
                            onClick={showMenu ? toggleMenu : undefined} 
                            to="routes" 
                            activeClassName='selected'
                            isActive={(match, location) => location.pathname.startsWith('/routes')}>
                            <i className="fas fa-mountain"></i>
                            <span>Routes</span>
                        </NavLink>
                        <NavLink
                            onClick={showMenu ? toggleMenu : undefined}
                            to="locations"
                            activeClassName='selected'
                            isActive={(match, location) => location.pathname.startsWith('/locations')}>
                            <i className="fas fa-map-marked-alt"></i>
                            <span>Locations</span>
                        </NavLink>
                    </div>
                    <div className="menu-items">
                        <h4>Account</h4>
                        <NavLink
                            onClick={showMenu ? toggleMenu : undefined}
                            to="settings" 
                            activeClassName='selected'
                            isActive={(match, location) => location.pathname.startsWith('/settings')}>
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </NavLink>
                        <a onClick={handleSignOut}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Sign Out</span>
                        </a>
                    </div>
                </div>
            </div>
            {showMenu === false &&
            <div className="main-container">
                <div className="main-header">
                    <h2>{header}</h2>
                    {location.pathname !== '/record-a-climb' &&
                    <NavLink
                        to="/record-a-climb"
                        className="btn btn-orange btn-large"
                    >
                        <div>Record a Climb</div>
                    </NavLink>}
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
            }

            <a className="menu-button" onClick={toggleMenu}>
                {showMenu ?
                    <i className="fas fa-times"></i> :
                    <i className="fas fa-bars"></i>
                }
            </a>
        </div>
    ); 
};

export default SendIt;