import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
  `;

export const StyledModal = styled.div`
  & {
    width: 70vw;
    min-width: 300px;
    min-height: 240px;
    height: 40vw;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: 2s;
  }

  &.active {
    animation: ${scale} 0.2s linear;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 80vw;
    height: 45vw;
  }

  @media ${({ theme }) => theme.media.smallTablet} {
    height: 20vw;
  }
`;

export const StyledCloseButton = styled.div`
  background-color: transparent;
  position: absolute;
  top: -40px;
  right: -40px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  width: 40px;
  height: 40px;
  transition: 0.1s;

  @media ${({ theme }) => theme.media.tablet} {
    right: 0;
    top: -50px;
  }

  &:hover {
    background-color: white;
    border-color: black;
  }

  &:hover > *,
  &:hover > *::before {
    background-color: black;
  }
`;

export const StyledCloseButtonLine = styled.div`
  &,
  &::before {
    content: '';
    left: 0;
    right: 0;
    top: 13px;
    margin: auto;
    width: 27px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transform: rotate(45deg);
    top: 16px;
    position: absolute;
  }

  &::before {
    position: absolute;
    top: 0;
    transform: rotate(90deg);
  }
`;

export const Blackout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.blackout};
  z-index: 6;
`;
