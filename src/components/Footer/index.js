import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterBase, Author, Origin, LogoFooter,
} from './styles';
import logo from '../../assets/imgs/logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <LogoFooter src={logo} alt="Logo" />
      </Link>
      <p>
        Desenvolvido por
        {' '}
        <Author href="https://wwww.linkedin.com/in/freirart">
          Artur Freire
        </Author>
        {' '}
        durante a
        {' '}
        <Origin href="https://www.alura.com.br/">
          Imersão React da Alura.
        </Origin>
      </p>
    </FooterBase>
  );
}

export default Footer;
