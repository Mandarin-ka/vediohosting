import { memo } from 'react';

import styled from 'styled-components';

const StyledBurger = styled.button`
  width: 40px;
  height: 30px;
  position: absolute;
  display: none;
  z-index: 2;
  transition: 0.1s;
  border: 0;
  background-color: transparent;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    right: 40px;
  }

  @media ${({ theme }) => theme.media.phone} {
    right: 15px;
  }

  &.active {
    position: fixed;
  }
`;

const StyledLine = styled.div`
  &,
  &::before,
  &::after {
    content: '';
    width: 40px;
    max-width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 3px;
    position: absolute;
    left: 0;
    transition: transform 0.2s;
  }

  & {
    top: 5px;
  }

  &::before {
    top: 10px;
  }

  &::after {
    top: 20px;
  }

  &.active {
    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    & {
      background-color: transparent;
      top: 13px;
    }

    &::after {
      transform: rotate(-45deg);
      top: auto;
      bottom: 0;
    }
  }
`;

function Burger(props: { className?: string; onClick?: () => void }) {
  return (
    <StyledBurger {...props}>
      <StyledLine className={props.className} />
    </StyledBurger>
  );
}

export default memo(Burger);
