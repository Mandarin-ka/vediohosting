import { StyledInput, StyledSearchButton, StyledWrapper } from './styled';
import useInput from '@/hooks/useInput';

function SearchBar(props: { placeholder?: string; query: string; setQuery: (q: string) => void }) {
  const { value, onChange } = useInput('');

  const onClick = () => {
    props.setQuery(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      props.setQuery(value);
    }
  };

  return (
    <StyledWrapper>
      <StyledInput placeholder="Search" value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <StyledSearchButton onClick={onClick} />
    </StyledWrapper>
  );
}

export default SearchBar;
