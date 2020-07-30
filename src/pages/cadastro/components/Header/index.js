import React from 'react';
import PropTypes from 'prop-types';

function Header({ header }) {
  const style = {
    color: '#414141',
    marginBottom: '35px',
    marginTop: '-5px',
  };
  return (
    <h1 style={style}>{header}</h1>
  );
}

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;
