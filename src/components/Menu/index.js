import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="</freirart> Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        <span className="symbol">+</span>
        {' '}
        &nbsp;
        <span className="text">New Video</span>
      </Button>
    </nav>
  );
}

export default Menu;
