import { memo } from 'react';

import { useAppSelector } from '@/hooks/redux/useAppSelector';

import * as styles from './PaginationButton.module.scss';

function PaginationButton({
  text,
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <button className={`${styles.button} ${styles[theme]}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(PaginationButton);
