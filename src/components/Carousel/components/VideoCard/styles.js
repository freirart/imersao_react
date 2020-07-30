import styled from 'styled-components';

export const HoverTitle = styled.p`
  opacity: 0;
  text-align: center;
`;

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 170px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  opacity: 70%;
  transition: .3s;
  &:hover,
  &:focus {
    opacity: 100%;
    z-index: 10;
    transform: scale(1.1);
  }
  &:hover ~ p,
  &:focus ~ p{
    opacity: 1;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
