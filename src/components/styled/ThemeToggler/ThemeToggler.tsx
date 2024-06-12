import { memo } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { themeSlice } from '@/store/reducers/ThemeReducer';

import styled from 'styled-components';

const StyledWrapper = styled.button`
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

const StyledBar = styled.div`
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

const StyledToggler = styled.div`
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

function ThemeToggler({ isBurgerActive }: { isBurgerActive: boolean }) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const { changeTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (theme === 'light') {
      dispatch(changeTheme({ theme: 'dark' }));
    } else {
      dispatch(changeTheme({ theme: 'light' }));
    }
  };

  console.log(theme);

  return (
    <StyledWrapper className={`${theme} ${isBurgerActive && 'burger'}`} onClick={onClick}>
      <StyledBar className={`${theme} ${isBurgerActive && 'burger'}`} />
      <StyledToggler className={`${theme} ${isBurgerActive && 'burger'}`} />
    </StyledWrapper>
  );
}

export default memo(ThemeToggler);
