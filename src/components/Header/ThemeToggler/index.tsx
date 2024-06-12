import { memo } from 'react';

import { StyledBar, StyledToggler, StyledWrapper } from './styled';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { themeSlice } from '@/store/reducers/ThemeReducer';

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

  return (
    <StyledWrapper className={`${theme} ${isBurgerActive && 'burger'}`} onClick={onClick}>
      <StyledBar className={`${theme} ${isBurgerActive && 'burger'}`} />
      <StyledToggler className={`${theme} ${isBurgerActive && 'burger'}`} />
    </StyledWrapper>
  );
}

export default memo(ThemeToggler);
