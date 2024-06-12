import Header from '@/components/Header/Header.1';
import { renderWithStore } from '@/tests/helpers/ReduxHelper';
import { render } from '@testing-library/react';

export const renderHeaderWithParams = (
  query: string = '',
  setQuery: (el: string) => void,
  isBurger: boolean = false,
  toggleBurger = () => {
    isBurger = !isBurger;
  },
) => {
  return render(renderWithStore(<Header query={query} setQuery={setQuery} isBurger={isBurger} toggleBurger={toggleBurger} />));
};
