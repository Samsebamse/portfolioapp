import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link to='/home'><li className="navbartext">Home</li></Link>
                <Link to='/projects'><li className="navbartext">Projects</li></Link>
            </ul>
        </div>
    );
};

