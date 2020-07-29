import React from 'react';
import logo from '../../assets/imgs/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="</freirart> Logo" />
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                <i className="fas fa-plus-square"></i> &nbsp; New Video
            </Button>
        </nav>
    );
}

export default Menu;