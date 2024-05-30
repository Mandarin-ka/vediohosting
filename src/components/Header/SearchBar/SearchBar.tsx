import { useState } from 'react';

import * as styles from './SearchBar.module.scss';

function SearchBar(props: {
  placeholder?: string;
  query: string;
  setQuery: (q: string) => void;
}) {
  const [value, setValue] = useState(props.query);

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
    <div className={styles.search__wrapper}>
      <input
        type='text'
        className={styles.input}
        placeholder={props?.placeholder || 'Search'}
        value={value}
        onChange={onChange}
        onKeyDown={keyPress}
      />
      <button className={styles.button} onClick={onClick}>
        <div className={styles.loupe}></div>
      </button>
    </div>
  );
}

export default SearchBar;
