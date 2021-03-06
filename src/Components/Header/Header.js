import React from 'react';
import  "./Header.css";
import logo from '../../Photo/team-hunter.png';
// import menuIcon from '../../Photo/menu.png';

const Header = (props) => {
    return (
        <div className="header">
            <div className="navbar">
             <a href="/home"> <img src={logo} className="logo" alt="" /> </a>
                <nav>
                    <ul >
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Teams</a></li>
                        <li><a href="/">Members</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </nav>
                {/* <img src={menuIcon} className="menu-icon" alt="" /> */}
            </div>
            <div className="banner-container">
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Header;