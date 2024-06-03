import { useState } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './SearchBar.module.scss';

function SearchBar(props: { placeholder?: string; query: string; setQuery: (q: string) => void }) {
  const [value, setValue] = useState(props.query);
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onClick = () => {
    props.setQuery(value);
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      props.setQuery(value);
    }
  };

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <input
        type="text"
        className={styles.input}
        placeholder={props?.placeholder || 'Search'}
        value={value}
        onChange={onChange}
        onKeyDown={keyPress}
        data-testid="query-input"
      />
      <button className={styles.button} onClick={onClick} data-testid="query-button">
        <div className={styles.loupe}></div>
      </button>
    </div>
  );
}

export default SearchBar;
