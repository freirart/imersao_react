import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    color: var(--black);
    flex: 1;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
    ${({ backG }) => css`
      background: ${backG};
    `}
`;

function PageDefault({ children, backG, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll} backG={backG}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: (<div />),
  backG: '#ededed',
  paddingAll: '0',
};

PageDefault.propTypes = {
  children: PropTypes.node,
  backG: PropTypes.string,
  paddingAll: PropTypes.string,
};

export default PageDefault;
