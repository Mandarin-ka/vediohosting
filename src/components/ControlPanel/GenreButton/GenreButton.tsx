import { memo } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './GenreButton.module.scss';

function GenreButton({
  text,
  onClick,
  className,
}: {
  value?: string;
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <button className={`${styles.button} ${styles[className]} ${styles[theme]}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(GenreButton);
