import { memo } from 'react';

import * as styles from './PaginationButton.module.scss';

function PaginationButton({
  text,
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(PaginationButton);
