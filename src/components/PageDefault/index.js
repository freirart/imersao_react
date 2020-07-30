import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background: #ededed;
    color: var(--black);
    flex: 1;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: (<div />),
};

PageDefault.propTypes = {
  children: PropTypes.node,
};

export default PageDefault;
