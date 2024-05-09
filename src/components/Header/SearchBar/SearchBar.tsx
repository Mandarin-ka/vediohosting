import { useState } from 'react';

import * as styles from './SearchBar.module.scss';

interface SearchBarProps {
  placeholder?: string;
  setQuery: (q: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onClick = () => {
    props.setQuery(value);
  };

  return (
    <div className={styles.search__wrapper}>
      <input
        type='text'
        className={styles.input}
        placeholder={props?.placeholder || 'Search'}
        value={value}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onClick}>
        <div className={styles.loupe}></div>
      </button>
    </div>
  );
}

export default SearchBar;
