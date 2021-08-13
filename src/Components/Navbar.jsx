import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Dropdown from './Dropdown';
import Scrollpbar from './Scrollpbar';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 360) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 360) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };
    
    return (
        <>
           { <Scrollpbar />}  
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       WEATHER
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services 
                                   <i className="blink_me fas fa-caret-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>

                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
