import { memo } from 'react';

import * as styles from './Button.module.scss';

function Button({ text, onClick }: { text?: string; onClick?: () => void }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
