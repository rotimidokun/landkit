import React from 'react';
import './Header.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
    return (
        <div className="headerContainer">

            <div className="logo">
                <h2> Landkit. </h2>
            </div>

            <div className="headerCenter">
                <ul>
                    <li> Landings </li>
                    <li> Pages </li>
                    <li> Account </li>
                    <li> Documentation </li>
                </ul>
            </div>

            <div className="headerRight">
                <p> Documentation </p>
                
                <button className="buyNowBtn"> Buy now </button>
            </div>

            <div className="menuIconContainer">
                <MenuRoundedIcon className="menuIcon" />
            </div>

        </div>
    )
}

export default Header;
