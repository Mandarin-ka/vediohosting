import styled from 'styled-components';

export const StyledWrapper = styled.button`
  & {
    width: 55px;
    height: 30px;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: white;
    transition: 0.3s;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.tablet} {
    position: fixed;
    right: -109%;
    z-index: 2;

    &.burger {
      right: calc(60vw - 70px);
    }
  }

  @media ${({ theme }) => theme.media.smallTablet} {
    &.burger {
      right: calc(80vw - 70px);
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    &.burger {
      right: calc(100vw - 70px);
    }
  }
`;

export const StyledBar = styled.div`
  & {
    height: 100%;
    position: absolute;
    width: 95%;
    background-color: #121212;
    border-radius: 20px;
    left: -100%;
    transition: 0.15s;
    top: 0;
  }

  &.dark {
    left: 0;
  }
`;

export const StyledToggler = styled.div`
  & {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    position: absolute;
    top: -3px;
    left: -3px;
    background-color: white;
    transition: 0.15s;
  }

  &.dark {
    left: 23px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
  }
`;
