import styled from 'styled-components';

const VideoCardContainer = styled.a`
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
  opacity: 80%;
  transition: .3s;
  &:hover,
  &:focus {
    z-index: 10;
    transform: scale(1.1);

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:not(:first-child) {
    margin-left: 20px;
  }

  & > span {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    padding: 20px;
    font-size: 20px;
    display: none;
    color: var(--grayLight);
  }
`;

export default VideoCardContainer;
