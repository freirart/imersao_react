import React from 'react';
import logo from '../../assets/imgs/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="</freirart> Logo" />
            </a>
            <Button as="a" href="" className="ButtonLink">
                <i className="fas fa-plus-square"></i> &nbsp; New Video
            </Button>
        </nav>
    );
}

export default Menu;