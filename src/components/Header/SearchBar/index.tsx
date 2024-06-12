import { StyledInput, StyledSearchButton, StyledWrapper } from './styled';
import useInput from '@/hooks/useInput';

function SearchBar(props: { placeholder?: string; query: string; setQuery: (q: string) => void }) {
  const { value, onChange } = useInput(props.query);

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
      <StyledInput placeholder="Search" value={value} onChange={onChange} onKeyDown={onKeyDown} data-testid="query-input" />
      <StyledSearchButton onClick={onClick} data-testid="query-button" />
    </StyledWrapper>
  );
}

export default SearchBar;
