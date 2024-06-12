import { memo } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { themeSlice } from '@/store/reducers/ThemeReducer';

import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 55px;
  height: 30px;
  border: 3px solid ${({ theme }) => theme.colors.orimary};
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: $white;
  transition: 0.3s;
`;

const StyledBar = styled.div``;

const StyledToggler = styled.div``;

function ThemeToggler({ isActive }: { isActive: boolean }) {
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

  return (
    <StyledWrapper>
      <StyledBar />
      <StyledToggler />
    </StyledWrapper>
  );
}

export default memo(ThemeToggler);
