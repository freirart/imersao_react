import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
function Header({ header }) {
  const style = {
    color: '#414141',
    marginBottom: '35px',
    marginTop: '-5px',
  };
  return (
    <h1 style={style}>{header}</h1>
  );
} */

const Header = styled.h1`
  color: #414141;
  margin-bottom: 35px;
  margin-top: -5px;

  @media (max-width: 421px){
    font-size: 26px;
  }
`;

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;
