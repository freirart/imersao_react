import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--frontEnd);
  padding: 20px 10px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 45px;
  }
`;

const Author = styled.a`
  text-decoration: none;
  color: var(--primary);
`;

const Origin = styled.a`
  text-decoration: none;
  color: var(--blue);
`;

const LogoFooter = styled.img`
  max-width: 168px;
`;

export {
  FooterBase, Author, Origin, LogoFooter,
};
